/**@jsx jsx */
import { css, Global, jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { AppProps } from 'next/app';
import getConfig from 'next/config';
import Head from 'next/head';
import * as React from 'react';
import { Layout } from '../components/atoms/Layout';
import { Header } from '../components/molecules/Header';
import { ThemeKey, themes } from '../theming/themes';

const {
  publicRuntimeConfig: { basePath },
} = getConfig();

const App = (props: AppProps) => {
  const [themeKey, setThemeKey] = React.useState<ThemeKey>('light');
  const handleSwitchTheme = React.useCallback(() => {
    setThemeKey(themeKey === 'light' ? 'dark' : 'light');
  }, [themeKey]);

  const theme = themes[themeKey];

  return (
    <>
      <Head>
        <title>Yuxiao He</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href={`${basePath}/favicon.png`} />
      </Head>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
          @font-face {
            font-family: 'IBM Plex Mono';
            font-weight: normal;
            font-style: normal;
            src: url('${basePath}/fonts/IBMPlexMono-Regular.woff2') format('woff2'),
              url('${basePath}/fonts/IBMPlexMono-Regular.woff') format('woff'),
              url('${basePath}/fonts/IBMPlexMono-Regular.ttf') format('truetype');
          }

          @font-face {
            font-family: 'IBM Plex Mono';
            font-weight: bold;
            font-style: normal;
            src: url('${basePath}/fonts/IBMPlexMono-Bold.woff2') format('woff2'),
              url('${basePath}/fonts/IBMPlexMono-Bold.woff') format('woff'),
              url('${basePath}/fonts/IBMPlexMono-Bold.ttf') format('truetype');
          }

          body {
            font-family: 'IBM Plex Mono', 'Courier New', Courier, monospace;
            color: ${theme.colors.theme.primary.standard};
            background-color: ${theme.colors.theme.background.standard};
          }

          body, h1, h2, h3, h4, h5, h6, p, caption, a, div, section, article, main, header, footer, ul, li, ol {
            font-size: 100%;
            margin: 0;
            padding: 0;
            border: 0;
          }

          ul,
          ol {
            list-style: none;
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
            <Header onClickSwitchTheme={handleSwitchTheme} />
          </Layout>
          <props.Component {...props.pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
