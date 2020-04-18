/**@jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { TypographyVariant, useTheme } from '../../theming/themes';

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant: TypographyVariant;
  component?: React.ElementType;
};

const variantMapping: { [key in TypographyVariant]: React.ElementType } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body1: 'p',
  body2: 'p',
  caption: 'p',
};

export const Typography: React.FC<TypographyProps> = props => {
  const { variant, component, children, ...restProps } = props;

  const theme = useTheme();

  const Component = component ?? variantMapping[variant];

  return (
    <Component css={[theme.typography[variant]]} {...restProps}>
      {children}
    </Component>
  );
};
