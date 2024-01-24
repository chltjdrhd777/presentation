import { PathnameType, navData } from 'Constants/navigation';
import { KeyDownType } from 'hook/useKeyboardNavigation';

export type NavigateDirectionType = Extract<
  KeyDownType,
  'ArrowLeft' | 'ArrowRight'
>;

export const getNextPath = (
  currentPath: PathnameType,
  direction: NavigateDirectionType,
) => {
  const currentPathIdx = navData.findIndex((d) => d.path === currentPath);

  return navData[
    direction === 'ArrowLeft'
      ? (currentPathIdx - 1 + navData.length) % navData.length
      : (currentPathIdx + 1) % navData.length
  ];
};
