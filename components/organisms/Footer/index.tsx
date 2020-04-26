/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { ThemeColors, useTheme } from '../../../theming/themes';
import { Layout } from '../../atoms/Layout';
import { Typography } from '../../atoms/Typography';

type FooterProps = {
  color?: keyof ThemeColors['primary'];
  backgroundColor?: keyof ThemeColors['background'];
} & React.FormHTMLAttributes<HTMLElement>;

export const Footer: React.FC<FooterProps> = ({
  color = 'standard',
  backgroundColor = 'standard',
  children,
}) => {
  const theme = useTheme();

  return (
    <Layout element="footer" backgroundColor={backgroundColor}>
      <Typography
        variant="body2"
        css={css`
          color: ${theme.colors.theme.primary[color]};
          text-align: center;
        `}
      >
        {children}
      </Typography>
    </Layout>
  );
};
