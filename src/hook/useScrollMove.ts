import { useEffect, useRef } from 'react';

export default function useScrollMove() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const target = ref.current;
    if (target) {
      const y = target.getBoundingClientRect().top;

      setTimeout(() => {
        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });
      }, 1800);
    }
  }, []);

  return { ref };
}
