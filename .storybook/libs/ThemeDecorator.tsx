import { ThemeProvider } from 'emotion-theming';
import { themes } from '../../theming/themes';
import * as React from 'react';

export const ThemeDecorator = () => {
  return Story => (
    <ThemeProvider theme={themes.light}>
      <Story />
    </ThemeProvider>
  );
};
