/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import Link from 'next/link';
import { GlobalColor } from '../../../../theming/colors';
import { ThemeColors, useTheme } from '../../../../theming/themes';

export type LinkBaseProps = React.ComponentProps<typeof Link> & {
  backgroundHoverColor?: keyof ThemeColors['background'] | GlobalColor;
};

export const LinkBase: React.FC<LinkBaseProps> = props => {
  const { backgroundHoverColor = 'variant0', children, ...linkProps } = props;
  const theme = useTheme();
  const backgroundColors = React.useMemo(
    () => ({ ...theme.colors.global, ...theme.colors.theme.background }),
    [theme]
  );

  return (
    <Link {...linkProps}>
      <a
        css={css`
          display: inherit;
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
    </Link>
  );
};
