import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export default function index() {
  return (
    <Header>
      <Link to="/" className="logo">
        Portfolio.
      </Link>

      <nav className="navbar">
        <Link to="/" className="active">
          Main
        </Link>
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
        <Link to="/studying">Studying</Link>
        <Link to="/closing">Closing</Link>
      </nav>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  background: var(--second-bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors['white-0']};

  & .logo {
    font-size: 2.5rem;
    font-weight: 600;
    cursor: pointer;
  }

  & .navbar {
    font-size: 1.7rem;
    color: inherit;
    display: flex;
    gap: 4rem;
    align-items: center;

    & a {
      padding: 1rem;
      transition: 0.3s;

      &:hover,
      &.active {
        font-weight: 600;
        font-size: 1.9rem;
        color: ${({ theme }) => theme.colors.pointGreen};
      }
    }
  }
`;
