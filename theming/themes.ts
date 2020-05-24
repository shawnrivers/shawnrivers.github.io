import { useTheme as emotionUseTheme } from 'emotion-theming';
import { GlobalColor, globalColors } from './colors';

export type ThemeColors = {
  primary: {
    standard: string;
    variant0: string;
    variant1: string;
    variant2: string;
    inverse: string;
  };
  secondary: {
    standard: string;
    variant0: string;
  };
  background: {
    standard: string;
    variant0: string;
    inverse: string;
  };
};

export type BackgroundColor = keyof ThemeColors['background'];

type TypographyStyles = {
  fontSize: string;
  lineHeight: string;
  fontWeight: 'normal' | 'bold';
};

type Typography = {
  h1: TypographyStyles;
  h2: TypographyStyles;
  h3: TypographyStyles;
  h4: TypographyStyles;
  body1: TypographyStyles;
  body2: TypographyStyles;
  caption: TypographyStyles;
};

export type TypographyVariant = keyof Typography;

export type ThemeKey = 'light' | 'dark';

type Spacing = {
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
};

export type Theme = {
  colors: {
    theme: ThemeColors;
    global: {
      [key in GlobalColor]: string;
    };
  };
  typography: Typography;
  spacing: Spacing;
  key: ThemeKey;
};

const typography: Typography = {
  h1: {
    fontSize: '48px',
    lineHeight: '60px',
    fontWeight: 'bold',
  },
  h2: {
    fontSize: '36px',
    lineHeight: '45px',
    fontWeight: 'bold',
  },
  h3: {
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 'bold',
  },
  h4: {
    fontSize: '20px',
    lineHeight: '25px',
    fontWeight: 'bold',
  },
  body1: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 'normal',
  },
  body2: {
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 'normal',
  },
  caption: {
    fontSize: '12px',
    lineHeight: '15px',
    fontWeight: 'normal',
  },
};

export const spacing: Spacing = {
  xxs: 4,
  xs: 8,
  s: 16,
  m: 24,
  l: 32,
  xl: 40,
  xxl: 56,
};

const {
  gray0,
  gray1,
  gray2,
  gray3,
  gray4,
  gray5,
  white,
  red0,
  red1,
} = globalColors;

const commonStyles: Pick<Theme, 'typography' | 'spacing'> = {
  typography,
  spacing,
};

const lightTheme: Theme = {
  key: 'light',
  colors: {
    theme: {
      primary: {
        standard: gray0,
        variant0: gray1,
        variant1: gray2,
        variant2: gray3,
        inverse: white,
      },
      secondary: {
        standard: red0,
        variant0: red1,
      },
      background: {
        standard: white,
        variant0: gray5,
        inverse: gray0,
      },
    },
    global: globalColors,
  },
  ...commonStyles,
};

const darkTheme: Theme = {
  key: 'dark',
  colors: {
    theme: {
      primary: {
        standard: white,
        variant0: gray5,
        variant1: gray4,
        variant2: gray2,
        inverse: gray0,
      },
      secondary: {
        standard: red0,
        variant0: red1,
      },
      background: {
        standard: gray0,
        variant0: gray1,
        inverse: white,
      },
    },
    global: globalColors,
  },
  ...commonStyles,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const useTheme = () => emotionUseTheme<Theme>();
