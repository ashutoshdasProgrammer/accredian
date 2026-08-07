'use client';

import gsap from 'gsap';
import { useEffect, useState } from 'react';

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  decimals?: number;
};

export default function AnimatedCounter({
  value,
  suffix = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const object = { value: 0 };

    const animation = gsap.to(object, {
      value,
      duration: 1.4,
      ease: 'power3.out',
      onUpdate: () => {
        setCount(object.value);
      },
    });

    return () => {
      animation.kill();
    };
  }, [value]);

  return (
    <>
      {count.toFixed(decimals)}
      {suffix}
    </>
  );
}