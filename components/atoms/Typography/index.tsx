/**@jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { TypographyVariant, useTheme } from '../../../theming/themes';

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant: TypographyVariant;
  element?: React.ElementType;
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
  const { variant, element, children, ...restProps } = props;

  const theme = useTheme();

  const Element = element ?? variantMapping[variant];

  return (
    <Element css={[theme.typography[variant]]} {...restProps}>
      {children}
    </Element>
  );
};
