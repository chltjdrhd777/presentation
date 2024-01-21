import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';
import { theme } from 'styles/theme';

export type Pathname = '/' | '/about' | '/works' | '/studying' | '/closing';

export default function AnimationProvider({
  children,
  pathname,
}: PropsWithChildren<{ pathname: Pathname }>) {
  const color = getPathnameColor(pathname);

  return <Provider color={color}>{children}</Provider>;
}

const Provider = styled.div<{ color: string }>`
  /* animations */
  .slide-in {
    ${({ color }) => theme.animations.slideIn(color)};
  }
  .slide-out {
    ${({ color }) => theme.animations.slideIn(color)};
  }
`;

const getPathnameColor = (location: Pathname) => {
  switch (location) {
    case '/':
      return theme.colors.pointTeal;
    case '/about':
      return theme.colors.pointEmerald;
    case '/works':
      return theme.colors.pointGreen;
    case '/studying':
      return theme.colors.pointLeaf;
    case '/closing':
      return theme.colors.pointBeige;
  }
};
