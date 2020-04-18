import { AppProps } from 'next/app';
import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { ThemeKey, themes } from '../theming/themes';

const App = (props: AppProps) => {
  const [theme, setTheme] = React.useState<ThemeKey>('light');
  const handleChangeTheme = React.useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  return (
    <ThemeProvider theme={themes[theme]}>
      <button onClick={handleChangeTheme}>Change Theme</button>
      <props.Component {...props.pageProps} />
    </ThemeProvider>
  );
};

export default App;
