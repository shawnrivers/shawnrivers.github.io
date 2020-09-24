/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import {
  TypographyVariant,
  useTheme,
  ThemeColors,
} from '../../../theming/themes';
import { GlobalColor } from '../../../theming/colors';

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant: TypographyVariant;
  element?: React.ElementType;
  color?: keyof ThemeColors['primary'] | GlobalColor;
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

export const Typography: React.FC<TypographyProps> = ({
  variant,
  element,
  color = 'standard',
  children,
  ...restProps
}) => {
  const theme = useTheme();
  const colors = React.useMemo(
    () => ({ ...theme.colors.global, ...theme.colors.theme.primary }),
    [theme]
  );

  const Element = element ?? variantMapping[variant];

  return (
    <Element
      css={[
        theme.typography[variant],
        css`
          color: ${colors[color]};
        `,
      ]}
      {...restProps}
    >
      {children}
    </Element>
  );
};
