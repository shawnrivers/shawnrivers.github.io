/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { BackgroundColor, useTheme } from '../../../theming/themes';

const MAX_WIDTH = 1004;

type LayoutProps = React.HTMLAttributes<HTMLElement> & {
  element?: React.ElementType;
  backgroundColor?: BackgroundColor;
};

export const Layout: React.FC<LayoutProps> = props => {
  const theme = useTheme();

  const {
    element: Element = 'div',
    backgroundColor = 'standard',
    ...restProps
  } = props;

  return (
    <Element
      css={css`
        background-color: ${theme.colors.theme.background[backgroundColor]};
      `}
      {...restProps}
    >
      <div
        css={css`
          max-width: ${MAX_WIDTH}px;
          margin: auto;
          padding: ${theme.spacing.l}px;
        `}
      >
        {props.children}
      </div>
    </Element>
  );
};
