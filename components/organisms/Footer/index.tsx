/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { ThemeColors } from '../../../theming/themes';
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
}) => (
  <Layout element="footer" backgroundColor={backgroundColor}>
    <Typography
      variant="body2"
      color={color}
      css={css`
        text-align: center;
      `}
    >
      {children}
    </Typography>
  </Layout>
);
