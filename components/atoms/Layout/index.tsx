/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { MAX_CONTENT, SP_SMALL } from '../../../libs/media';
import { BackgroundColor, useTheme } from '../../../theming/themes';

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
          max-width: ${MAX_CONTENT}px;
          margin: auto;
          padding: ${theme.spacing.l}px;

          @media (max-width: ${SP_SMALL}px) {
            padding: ${theme.spacing.m}px;
          }
        `}
      >
        {props.children}
      </div>
    </Element>
  );
};
