import { PathnameType } from 'Constants/navigation';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getNextPath } from 'utils/getNextPath';
import useKeyPress from './useKeyPress';

export type KeyDownType = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight';

export default function useKeyboardNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const { keyPress, setKeyPress } = useKeyPress();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // if (keyPress.isAnimating) return;
      // setKeyPress((draft) => {
      //   draft.isAnimating = true;
      //   return draft;
      // });

      const key = event.key as KeyDownType;

      if (key === 'ArrowLeft' || key === 'ArrowRight') {
        const nextPath = getNextPath(location.pathname as PathnameType, key);
        navigate(nextPath.path);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate, location]);
}
