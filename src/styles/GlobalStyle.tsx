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
      scroll-behavior: smooth;
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
      /* background: ${colors.pointTeal}; */
      color: ${colors['black-0']};
    }

    & .section {
      width: 100%;
      min-height: 100vh;
      padding-top: 5rem;
    }
  `;

  return <Global styles={styles} />;
}
