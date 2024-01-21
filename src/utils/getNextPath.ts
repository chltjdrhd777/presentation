import { PathnameType, navData } from 'Constants/navigation';
import { KeyDownType } from 'hook/useKeyboardNavigation';

export const getNextPath = (
  currentPath: PathnameType,
  direction: Extract<KeyDownType, 'ArrowLeft' | 'ArrowRight'>,
) => {
  const currentPathIdx = navData.findIndex((d) => d.path === currentPath);

  return navData[
    direction === 'ArrowLeft'
      ? (currentPathIdx - 1 + navData.length) % navData.length
      : (currentPathIdx + 1) % navData.length
  ];
};
