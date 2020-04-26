/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { CARD_MAX_WIDTH, CARD_MIN_WIDTH } from '../../../../libs/media';
import { ThemeColors, useTheme } from '../../../../theming/themes';
import { SvgIconComponent } from '../../../atoms/icons/types';
import { Typography } from '../../../atoms/Typography';

const iconSize = 48;
const headingIconYOffset = iconSize / 2;

export type ArticleCardProps = {
  headingIcon: SvgIconComponent;
  heading: string;
  body: string;
  color?: keyof ThemeColors['primary'];
  backgroundColor?: keyof ThemeColors['background'];
  margin?: number;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  headingIcon,
  heading,
  body,
  color = 'standard',
  backgroundColor = 'standard',
  margin = 0,
  ...restProps
}) => {
  const theme = useTheme();

  const HeadingIcon = headingIcon;

  return (
    <div
      css={css`
        background-color: ${theme.colors.theme.background[backgroundColor]};
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: ${margin + headingIconYOffset}px ${margin}px ${margin}px;
        max-width: ${CARD_MAX_WIDTH}px;
        min-width: ${CARD_MIN_WIDTH}px;
        border-radius: 8px;
        height: 100%;
      `}
      {...restProps}
    >
      <HeadingIcon
        fill={theme.colors.theme.primary[color]}
        width={iconSize}
        height={iconSize}
        title={heading}
        css={css`
          margin: -${headingIconYOffset}px 0 ${theme.spacing.xxs}px;
        `}
      />
      <article
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 ${theme.spacing.m}px ${theme.spacing.m}px;
        `}
      >
        <Typography
          variant="h4"
          color={color}
          css={css`
            margin-bottom: ${theme.spacing.s}px;
            text-transform: uppercase;
          `}
        >
          {heading}
        </Typography>
        <Typography variant="body2" color={color}>
          {body}
        </Typography>
      </article>
    </div>
  );
};
