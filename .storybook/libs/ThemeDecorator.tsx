import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import { themes } from '../../theming/themes';

export const ThemeDecorator = () => {
  return Story => (
    <ThemeProvider theme={themes.light}>
      <Story />
    </ThemeProvider>
  );
};
