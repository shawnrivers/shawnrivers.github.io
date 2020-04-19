/**@jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { TypographyVariant, useTheme } from '../../../theming/themes';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  typography: TypographyVariant;
};

export const Link: React.FC<LinkProps> = props => {
  const { typography, children, ...restProps } = props;

  const theme = useTheme();

  return (
    <a css={[theme.typography[typography]]} {...restProps}>
      {children}
    </a>
  );
};
