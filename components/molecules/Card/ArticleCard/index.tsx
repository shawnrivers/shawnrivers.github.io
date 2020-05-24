/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { CARD_MAX_WIDTH, CARD_MIN_WIDTH } from '../../../../libs/media';
import {
  ThemeColors,
  ThemeSpacing,
  useTheme,
} from '../../../../theming/themes';
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
  margin?: keyof ThemeSpacing;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  headingIcon,
  heading,
  body,
  color = 'standard',
  backgroundColor = 'standard',
  margin = 'none',
  ...restProps
}) => {
  const theme = useTheme();
  const marginValue = theme.spacing[margin];
  const HeadingIcon = headingIcon;

  return (
    <div
      css={css`
        background-color: ${theme.colors.theme.background[backgroundColor]};
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: calc(${marginValue} + ${headingIconYOffset}px) ${marginValue}
          ${marginValue};
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
          margin: -${headingIconYOffset}px 0 ${theme.spacing.xxs};
        `}
      />
      <article
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 ${theme.spacing.m} ${theme.spacing.m};
        `}
      >
        <Typography
          variant="h4"
          color={color}
          css={css`
            margin-bottom: ${theme.spacing.s};
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
