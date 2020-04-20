/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Typography } from '../../components/atoms/Typography';
import { useTheme } from '../../theming/themes';
import { Layout } from '../atoms/Layout';
import { CircleImage } from '../atoms/CircleImage';
import profile1x from '../images/profile-1x.jpg';
import profile2x from '../images/profile-2x.jpg';
import profile3x from '../images/profile-3x.jpg';

export const Home: React.FC = () => {
  const theme = useTheme();

  // console.log(profile1x, profile2x, profile3x);

  return (
    <>
      <Layout element="section" backgroundColor="standard">
        <CircleImage
          src={profile1x}
          srcSet={`${profile1x} 1x, ${profile2x} 2x, ${profile3x} 3x`}
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
