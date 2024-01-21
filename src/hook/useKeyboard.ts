import { PathnameType, getDirection, getNextPath } from 'Constants/navigation';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type KeyDownType = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight';

export default function useKeyboard() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const direction = getDirection(event.key as KeyDownType);
      const nextPath = getNextPath(
        location.pathname as PathnameType,
        direction,
      );

      if (nextPath) {
        navigate(nextPath);
      }

      console.log(direction, nextPath);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  useEffect(() => {
    window.addEventListener('keydown', (e) => {});
  }, []);
}
