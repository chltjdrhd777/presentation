import { css } from '@emotion/react';

const fullscreen = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

export const animations = {
  slideIn: (color: string) => css`
    ${fullscreen}

    position: fixed;
    background-color: ${color};
    transform-origin: bottom;
  `,
  slideOut: (color: string) => css`
    ${fullscreen}

    position: fixed;
    background-color: ${color};
    transform-origin: top;
  `,
};
