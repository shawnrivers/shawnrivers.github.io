/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { useTheme, ThemeColors } from '../../../../theming/themes';
import { GlobalColor } from '../../../../theming/colors';

export type AnchorBaseProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  backgroundHoverColor?: keyof ThemeColors['background'] | GlobalColor;
};

export const AnchorBase: React.FC<AnchorBaseProps> = props => {
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
        display: inline-block;
        padding: ${theme.spacing.xs} ${theme.spacing.s};
        border-radius: 8px;
        transition: background-color 0.3s ease-out;
        text-decoration: underline;
        text-underline-position: under;

        &:hover {
          background-color: ${backgroundColors[backgroundHoverColor]};
        }

        &:focus {
          outline: auto;
        }
      `}
    >
      {children}
    </a>
  );
};
