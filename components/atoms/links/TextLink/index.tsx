/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { useTheme, ThemeColors } from '../../../../theming/themes';
import { GlobalColor } from '../../../../theming/colors';

export type TextLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  backgroundHoverColor?: keyof ThemeColors['background'] | GlobalColor;
};

export const TextLink: React.FC<TextLinkProps> = props => {
  const { backgroundHoverColor = 'variant0', children, ...restProps } = props;
  const theme = useTheme();
  const backgroundColors = React.useMemo(
    () => ({ ...theme.colors.global, ...theme.colors.theme.background }),
    [theme]
  );

  return (
    <a
      {...restProps}
      css={css`
        display: inherit;
        padding: ${theme.spacing.xs}px ${theme.spacing.s}px;
        border-radius: 8px;
        transition: background-color 0.3s ease-out;

        &:hover {
          background-color: ${backgroundColors[backgroundHoverColor]};
        }
      `}
    >
      {children}
    </a>
  );
};
