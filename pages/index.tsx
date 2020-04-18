import { NextPage } from 'next';
import * as React from 'react';
import { useTheme } from '../theming/themes';

const IndexPage: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <h1>Home Page</h1>
      <p>Current theme: {theme.key}</p>
    </>
  );
};

export default IndexPage;
