'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, type SpringOptions } from 'framer-motion';

// Tighter springs for less lag
const DOT_SPRING: SpringOptions = {
  stiffness: 800,
  damping: 40,
  mass: 0.15,
};

const RING_SPRING: SpringOptions = {
  stiffness: 350,
  damping: 20,
  mass: 0.3,
};

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [clicked, setClicked] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const smoothX = useSpring(cursorX, DOT_SPRING);
  const smoothY = useSpring(cursorY, DOT_SPRING);
  const smoothRingX = useSpring(ringX, RING_SPRING);
  const smoothRingY = useSpring(ringY, RING_SPRING);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }
    setIsVisible(true);
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    },
    [cursorX, cursorY, ringX, ringY],
  );

  const onMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isClickable =
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.tagName === 'SELECT' ||
      target.closest('a') ||
      target.closest('button') ||
      target.getAttribute('role') === 'button' ||
      target.closest('[role="button"]') ||
      target.closest('[data-cursor-hover]') ||
      target.classList.contains('tilt-card');

    setIsHovering(!!isClickable);
  }, []);

  const onMouseDown = useCallback(() => {
    setClicked(true);
    setTimeout(() => setClicked(false), 150);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', () => setClicked(false));
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', () => setClicked(false));
    };
  }, [isTouchDevice, onMouseMove, onMouseOver, onMouseDown]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Main cursor dot — near-instant tracking */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full bg-primary"
          animate={{
            width: isHovering ? 14 : 8,
            height: isHovering ? 14 : 8,
            scale: clicked ? 0.7 : 1,
            opacity: isHovering ? 0.9 : 1,
          }}
          transition={{ duration: 0.12, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Trailing ring — slight lag for smooth effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        style={{
          x: smoothRingX,
          y: smoothRingY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full border"
          animate={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            borderColor: isHovering
              ? 'hsl(var(--primary) / 0.7)'
              : 'hsl(var(--primary) / 0.3)',
            backgroundColor: isHovering
              ? 'hsl(var(--primary) / 0.08)'
              : 'transparent',
            scale: clicked ? 1.4 : 1,
          }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        />
      </motion.div>
    </>
  );
}
