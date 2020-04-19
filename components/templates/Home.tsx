/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Typography } from '../../components/atoms/Typography';
import { useTheme } from '../../theming/themes';
import { Layout } from '../atoms/Layout';

export const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Layout>
        <Typography
          variant="h1"
          css={css`
            color: ${theme.colors.theme.primary.standard};
          `}
        >
          Home Page
        </Typography>
        <Typography
          variant="body1"
          css={css`
            color: ${theme.colors.theme.primary.standard};
          `}
        >
          Current theme: {theme.key}
        </Typography>
      </Layout>
    </>
  );
};
