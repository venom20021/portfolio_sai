'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useIsTouchDevice } from '@/hooks/use-is-touch-device';

const THROTTLE_MS = 16; // ~60fps

export default function CustomCursor() {
  const isTouchDevice = useIsTouchDevice();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const lastMoveRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastMoveRef.current < THROTTLE_MS) return;
    lastMoveRef.current = now;
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive =
      target.tagName === 'BUTTON' ||
      target.tagName === 'A' ||
      target.closest('button') ||
      target.closest('a') ||
      target.closest('[data-cursor-hover]');
    setIsHovering(!!isInteractive);
  }, []);

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  useEffect(() => {
    if (isTouchDevice) return;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isTouchDevice, handleMouseMove, handleMouseOver, handleMouseDown, handleMouseUp]);

  if (isTouchDevice) return null;

  const dotSize = isClicking ? 6 : isHovering ? 10 : 8;
  const ringSize = isClicking ? 28 : isHovering ? 48 : 36;

  return (
    <>
      {/* Main dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          width: dotSize,
          height: dotSize,
          borderRadius: '50%',
          backgroundColor: 'hsl(var(--primary))',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.15s, height 0.15s',
          willChange: 'transform',
        }}
      />
      {/* Trailing ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: position.x,
          top: position.y,
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          border: '1.5px solid hsl(var(--primary) / 0.4)',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.25s ease-out, height 0.25s ease-out, left 0.12s linear, top 0.12s linear',
          willChange: 'transform',
        }}
      />
    </>
  );
}
