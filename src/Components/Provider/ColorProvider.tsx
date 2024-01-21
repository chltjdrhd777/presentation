import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { theme } from 'styles/theme';

import { PathnameType } from 'Constants/navigation';
import { getPathColor } from 'utils/getPathColor';

export default function ColorProvider({
  children,
  pathname,
}: PropsWithChildren<{ pathname: PathnameType }>) {
  const color = getPathColor(pathname);

  return <Provider color={color.bg}>{children}</Provider>;
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
