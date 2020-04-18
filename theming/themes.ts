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

type Typography = {
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  body1: number;
  body2: number;
  caption: number;
};

export type ThemeKey = 'light' | 'dark';

type Theme = {
  colors: {
    theme: ThemeColors;
    global: {
      [key in GlobalColor]: string;
    };
  };
  typography: Typography;
  key: ThemeKey;
};

export const typography: Typography = {
  h1: 48,
  h2: 36,
  h3: 24,
  h4: 20,
  body1: 16,
  body2: 14,
  caption: 12,
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

const lightTheme: Theme = {
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
  typography,
  key: 'light',
};

const darkTheme: Theme = {
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
  typography,
  key: 'dark',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const useTheme = () => emotionUseTheme<Theme>();
