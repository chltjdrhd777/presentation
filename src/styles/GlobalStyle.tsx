import { Global, css } from '@emotion/react';
import { colors } from './theme/colors';
import { theme } from './theme';
import { useLocation } from 'react-router-dom';

export default function GlobalStyle() {
  const styles = css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      border: none;
      outline: none;
      /* scroll-behavior: smooth; */
      font-family: 'Poppins', 'sans-serif';
    }

    a {
      color: inherit;
    }

    html {
      font-size: 62.5%;
      overflow-x: hidden;
    }

    body {
      color: ${colors['black-0']};
    }

    & .section {
      width: 100%;
      min-height: 100vh;
      padding-top: 5rem;

      .scroll-watcher {
        height: 0.5rem;
        position: fixed;
        top: 6rem;
        background-color: lime;
        width: 100%;
        scale: 0 1;
        transform-origin: left;
        animation: scroll-watcher linear;
        animation-timeline: scroll();
        z-index: ${theme.zIndex['z-1']};
      }

      @keyframes scroll-watcher {
        to {
          scale: 1 1;
        }
      }
    }
  `;

  return <Global styles={styles} />;
}
