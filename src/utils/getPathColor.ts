import { PathnameType } from 'Constants/navigation';
import { theme } from 'styles/theme';

export interface PathColorType {
  bg: string;
  text: string;
  active?: string;
  hover?: string;
}

export const getPathColor = (location: PathnameType): PathColorType => {
  switch (location) {
    case '/':
      return {
        bg: theme.colors.pointTeal,
        text: theme.colors['white-0'],
        active: theme.colors.pointBrown,
      };
    case '/about':
      return {
        bg: theme.colors.pointEmerald,
        text: theme.colors['white-0'],
        active: theme.colors.pointGreen,
      };
    case '/works':
      return {
        bg: theme.colors.pointGreen,
        text: theme.colors['white-0'],
        active: theme.colors.pointYellow,
      };

    case '/studying':
      return {
        bg: theme.colors.pointLeaf,
        text: theme.colors['white-0'],
        active: '#5703A6',
      };

    case '/closing':
      return {
        bg: theme.colors.pointBeige,
        text: theme.colors.pointGreen,
        active: theme.colors.pointOrange,
      };
  }
};
