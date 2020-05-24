/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { SP_SMALL, CARD_MAX_WIDTH } from '../../../libs/media';
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
          max-width: calc(
            (${CARD_MAX_WIDTH}px + ${theme.spacing.l} * 2) * 4 +
              ${theme.spacing.l} * 2
          );
          margin: auto;
          padding: ${theme.spacing.l};

          @media (max-width: ${SP_SMALL}px) {
            padding: ${theme.spacing.m};
          }
        `}
      >
        {props.children}
      </div>
    </Element>
  );
};
