import { PathnameType } from 'Constants/navigation';
import { theme } from 'styles/theme';

export interface PathColorType {
  bg: string;
  text?: string;
  active?: string;
  hover?: string;
}

export const getPathColor = (location: PathnameType): PathColorType => {
  switch (location) {
    case '/':
      return {
        bg: theme.colors.pointTeal,
        active: theme.colors.pointGreen,
      };
    case '/about':
      return {
        bg: theme.colors.pointEmerald,
      };
    case '/works':
      return {
        bg: theme.colors.pointGreen,
      };

    case '/studying':
      return {
        bg: theme.colors.pointLeaf,
      };

    case '/closing':
      return {
        bg: theme.colors.pointBeige,
      };
  }
};
