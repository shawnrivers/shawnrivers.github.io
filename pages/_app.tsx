/**@jsx jsx */
import { css, Global, jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { AppProps } from 'next/app';
import getConfig from 'next/config';
import Head from 'next/head';
import * as React from 'react';
import { Footer } from '../components/organisms/Footer';
import { Header } from '../components/organisms/Header';
import { copyright } from '../data/copyright';
import { ThemeKey, themes } from '../theming/themes';

const {
  publicRuntimeConfig: { basePath },
} = getConfig();

const App = (props: AppProps) => {
  const [themeKey, setThemeKey] = React.useState<ThemeKey>('light');
  const handleSwitchTheme = React.useCallback(() => {
    setThemeKey(themeKey === 'light' ? 'dark' : 'light');
  }, [themeKey]);

  const theme = React.useMemo(() => themes[themeKey], [themeKey]);

  React.useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    if (darkModeMediaQuery.media === 'not all') {
      setThemeKey('light');
    } else {
      if (darkModeMediaQuery.matches) {
        setThemeKey('dark');
      } else {
        setThemeKey('light');
      }

      darkModeMediaQuery.addListener(event => {
        setThemeKey(event.matches ? 'dark' : 'light');
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Yuxiao He</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Yuxiao He personal page" />
        <meta name="og:title" content="Yuxiao He" />
        <meta name="og:description" content="Yuxiao He personal page" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://shawnrivers.github.io/" />
        <meta
          name="og:image"
          content="https://raw.githubusercontent.com/shawnrivers/shawnrivers.github.io/develop/public/meta-social-text.jpg"
        />
        <meta name="og:image:type" content="image/jpeg" />
        <meta name="og:image:width" content="1280" />
        <meta name="og:image:height" content="640" />
        <meta name="og:image:alt" content="Yuxiao He personal page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@yuxiao_he" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
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
              font-size: 100%;
              font-family: 'IBM Plex Mono', 'Courier New', Courier, monospace;
              color: ${theme.colors.theme.primary.standard};
              background-color: ${theme.colors.theme.background.standard};
            }

            body, h1, h2, h3, h4, h5, h6, p, caption, a, div, section, article, main, header, footer, ul, li, ol {
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
          <Header
            color="standard"
            backgroundColor="standard"
            onClickSwitchTheme={handleSwitchTheme}
          />
          <props.Component {...props.pageProps} />
          <Footer color="standard" backgroundColor="standard">
            {copyright}
          </Footer>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
