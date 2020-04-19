/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Typography } from '../../components/atoms/Typography';
import { useTheme } from '../../theming/themes';
import { Layout } from '../atoms/Layout';
import { CircleImage } from '../atoms/CircleImage';

export const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Layout element="section" backgroundColor="standard">
        <CircleImage
          src="/images/profile-1x.jpg"
          srcSet="/images/profile-1x.jpg 1x, /images/profile-2x.jpg 2x, /images/profile-3x.jpg 3x"
          alt="Yuxiao He"
        />
        <Typography
          variant="h1"
          css={css`
            color: ${theme.colors.theme.primary.standard};
          `}
        >
          Yuxiao He
        </Typography>
      </Layout>
    </>
  );
};
