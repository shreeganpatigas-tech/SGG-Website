import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: string; // The target value as a string (e.g. "180", "99.999", "100")
  duration?: number; // duration in ms
}

export default function AnimatedCounter({ value, duration = 1800 }: AnimatedCounterProps) {
  const [current, setCurrent] = useState<number>(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isDecimal = value.includes(".");

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const nextVal = progress * numericValue;
      setCurrent(nextVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCurrent(numericValue);
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        animationFrameId = requestAnimationFrame(animate);
        if (observer && elementRef.current) observer.unobserve(elementRef.current);
      }
    };

    observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (observer && elementRef.current) observer.unobserve(elementRef.current);
      cancelAnimationFrame(animationFrameId);
    };
  }, [numericValue, duration, value]);

  const displayValue = isDecimal 
    ? current.toFixed(3) 
    : Math.floor(current).toString();

  return (
    <span ref={elementRef} className="font-sans font-bold tracking-tight text-white">
      {displayValue}
    </span>
  );
}
