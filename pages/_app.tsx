/**@jsx jsx */
import { css, Global, jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { AppProps } from 'next/app';
import * as React from 'react';
import { Layout } from '../components/atoms/Layout';
import { Header } from '../components/molecules/Header';
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
          @font-face {
            font-family: 'Source Code Pro';
            font-weight: 500;
            font-style: normal;
            src: url('/fonts/SourceCodePro-Regular.ttf.woff2') format('woff2'),
              url('/fonts/SourceCodePro-Regular.ttf.woff') format('woff'),
              url('/fonts/SourceCodePro-Regular.ttf') format('truetype');
          }

          @font-face {
            font-family: 'Source Code Pro';
            font-weight: 700;
            font-style: normal;
            src: url('/fonts/SourceCodePro-Bold.ttf.woff2') format('woff2'),
              url('/fonts/SourceCodePro-Bold.ttf.woff') format('woff'),
              url('/fonts/SourceCodePro-Bold.ttf') format('truetype');
          }

          body {
            font-family: 'Source Code Pro', 'Courier New', Courier, monospace;
            color: ${themes.light.colors.global.grey0};
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
