'use client';

import { useState, useEffect } from 'react';

export function useIsTouchDevice(): boolean {
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    if (!('ontouchstart' in window) && navigator.maxTouchPoints === 0) {
      setIsTouchDevice(false);
    }
  }, []);

  return isTouchDevice;
}
