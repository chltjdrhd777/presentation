import { KeyDownType } from 'hook/useKeyboard';

// 타입
export type PathnameType = '/' | '/about' | '/works' | '/studying' | '/closing';

// 경로 리스트
export const navData: Array<{ name: string; path: PathnameType }> = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Works', path: '/works' },
  { name: 'Studying', path: '/studying' },
  { name: 'Closing', path: '/closing' },
];

export const getDirection = (keyDown: KeyDownType) => {
  if (keyDown === 'ArrowUp' || keyDown === 'ArrowRight') return 'prev';
  if (keyDown === 'ArrowDown' || keyDown === 'ArrowLeft') return 'next';

  return null;
};

export const getNextPath = (
  currentPath: PathnameType,
  direction: 'prev' | 'next' | null,
) => {
  //   const currentPathIdx = path.findIndex((path) => path === currentPath);

  //   if (currentPathIdx === 0) {
  //     return path[direction === 'prev' ? path.length - 1 : currentPathIdx + 1];
  //   }

  //   if (currentPathIdx === path.length - 1) {
  //     return path[direction === 'prev' ? currentPathIdx - 1 : 0];
  //   }

  return null;
};
