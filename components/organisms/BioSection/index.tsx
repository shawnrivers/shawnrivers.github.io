/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Layout } from '../../atoms/Layout';
import { useTheme } from '../../../theming/themes';
import { Typography } from '../../atoms/Typography';

export const BioSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Layout element="section" backgroundColor="variant0">
      <Typography
        variant={'h3'}
        css={css`
          color: ${theme.colors.theme.primary.standard};
          text-align: center;
        `}
      >
        Bio
      </Typography>
    </Layout>
  );
};
