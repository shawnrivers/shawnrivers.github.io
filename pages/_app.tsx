/**@jsx jsx */
import { jsx, css, Global } from '@emotion/core';
import { AppProps } from 'next/app';
import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { ThemeKey, themes } from '../theming/themes';
import { Layout } from '../components/atoms/Layout';
import { Header } from '../components/molecules/Header';

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
            padding: 0;
            border: 0;
          }

          ul,
          li {
            list-style: none;
            padding: 0;
            margin: 0;
            text-indent: 0;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          button {
            appearance: none;
            background-color: transparent;
            border: 0;
            cursor: pointer;
            font: inherit;
            outline: initial;
            padding: 0;
          }
        `}
      />
      <div
        css={css`
          background-color: ${theme.colors.theme.background.standard};
        `}
      >
        <Layout>
          <Header onChangeTheme={handleSwitchTheme} />
        </Layout>
        <props.Component {...props.pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
