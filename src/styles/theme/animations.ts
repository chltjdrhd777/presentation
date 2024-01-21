import { css } from '@emotion/react';

export const animations = {
  slideIn: (color: string) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${color};
    transform-origin: bottom;
  `,
  slideOut: (color: string) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${color};
    transform-origin: top;
  `,
};
