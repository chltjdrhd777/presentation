import styled from '@emotion/styled';
import { PathnameType, navData } from 'Constants/navigation';
import useGetPathColor from 'hook/useGetPathColor';
import { Link, useLocation } from 'react-router-dom';
import { PathColorType } from 'utils/getPathColor';

export default function Index() {
  const location = useLocation();
  const pathname = location.pathname as PathnameType;
  const pathColor = useGetPathColor();

  return (
    <Header pathColor={pathColor}>
      <Link to="/" className="logo">
        Portfolio.
      </Link>

      <nav className="navbar">
        {navData.map(({ name, path }) => (
          <Link key={path} to={path} className={pathname === path ? 'active' : ''}>
            {name}
          </Link>
        ))}
      </nav>
    </Header>
  );
}

const Header = styled.header<{ pathColor: PathColorType }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  padding: 2rem 9%;
  background: ${({ pathColor }) => pathColor.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ pathColor }) => pathColor.text};
  z-index: 100;

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
      }

      &:hover {
        color: ${({ pathColor, theme }) => pathColor.active ?? theme.colors.pointGreen};
      }

      &.active {
        color: ${({ pathColor, theme }) => pathColor.active ?? theme.colors.pointGreen};
      }
    }
  }
`;
