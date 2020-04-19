/**@jsx jsx */
import { jsx, css, Global } from '@emotion/core';
import { AppProps } from 'next/app';
import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { ThemeKey, themes } from '../theming/themes';

const App = (props: AppProps) => {
  const [themeKey, setThemeKey] = React.useState<ThemeKey>('light');
  const handleSwitchTheme = React.useCallback(() => {
    setThemeKey(themeKey === 'light' ? 'dark' : 'light');
  }, [themeKey]);

  const theme = themes[themeKey];

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <div
        css={css`
          background-color: ${theme.colors.theme.background.standard};
        `}
      >
        <button onClick={handleSwitchTheme}>Change Theme</button>
        <props.Component {...props.pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
