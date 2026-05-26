import { useEffect, useRef, useState, useCallback } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  delay?: number;
  enabled?: boolean;
  formatter?: (value: number) => string;
}

export function useCountUp(options: UseCountUpOptions) {
  const {
    end,
    duration = 2000,
    start = 0,
    delay = 0,
    enabled = true,
    formatter = (value: number) => Math.floor(value).toLocaleString(),
  } = options;

  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const delayTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const startAnimation = useCallback(() => {
    if (!enabled) return;
    if (isAnimating) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(start + (end - start) * eased);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsAnimating(false);
      }
    };

    setIsAnimating(true);
    startTimeRef.current = 0;
    rafRef.current = requestAnimationFrame(animate);
  }, [end, duration, start, enabled, isAnimating]);

  useEffect(() => {
    if (!enabled) return;

    delayTimeoutRef.current = setTimeout(startAnimation, delay);

    return () => {
      if (delayTimeoutRef.current) {
        clearTimeout(delayTimeoutRef.current);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enabled, startAnimation, delay]);

  const displayValue = formatter(count);

  return { count, displayValue, isAnimating };
}
