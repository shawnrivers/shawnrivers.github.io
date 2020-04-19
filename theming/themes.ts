import { GlobalColor, globalColors } from './colors';
import { useTheme as emotionUseTheme } from 'emotion-theming';

type ThemeColors = {
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
  fontWeight: 700 | 500;
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
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
};

type Theme = {
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
    fontWeight: 700,
  },
  h2: {
    fontSize: '36px',
    lineHeight: '45px',
    fontWeight: 700,
  },
  h3: {
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 700,
  },
  h4: {
    fontSize: '20px',
    lineHeight: '25px',
    fontWeight: 700,
  },
  body1: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 500,
  },
  body2: {
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 500,
  },
  caption: {
    fontSize: '12px',
    lineHeight: '15px',
    fontWeight: 500,
  },
};

const spacing: Spacing = {
  xs: 8,
  s: 16,
  m: 24,
  l: 32,
  xl: 40,
  xxl: 56,
};

const {
  grey0,
  grey1,
  grey2,
  grey3,
  grey4,
  grey5,
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
        standard: grey0,
        variant0: grey1,
        variant1: grey2,
        variant2: grey3,
        inverse: white,
      },
      secondary: {
        standard: red0,
        variant0: red1,
      },
      background: {
        standard: white,
        variant0: grey5,
        inverse: grey0,
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
        variant0: grey5,
        variant1: grey4,
        variant2: grey2,
        inverse: grey0,
      },
      secondary: {
        standard: red0,
        variant0: red1,
      },
      background: {
        standard: grey0,
        variant0: grey1,
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
