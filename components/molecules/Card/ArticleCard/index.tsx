/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { CARD_WIDTH } from '../../../../libs/media';
import { useTheme } from '../../../../theming/themes';
import { SvgIconComponent } from '../../../atoms/icons/types';
import { Typography } from '../../../atoms/Typography';

type ArticleCardProps = {
  headingIcon: SvgIconComponent;
  heading: string;
  body: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = props => {
  const theme = useTheme();

  const headingIconYOffset = theme.spacing.m;
  const HeadingIcon = props.headingIcon;

  return (
    <div
      css={css`
        background-color: ${theme.colors.theme.background.standard};
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: ${headingIconYOffset}px;
        max-width: ${CARD_WIDTH}px;
        border-radius: 8px;
      `}
    >
      <HeadingIcon
        fill={theme.colors.theme.primary.standard}
        width={48}
        height={48}
        css={css`
          margin: -${headingIconYOffset}px 0 ${theme.spacing.xxs}px;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 ${theme.spacing.m}px ${theme.spacing.m}px;
        `}
      >
        <Typography
          variant="h4"
          css={css`
            color: ${theme.colors.theme.primary.standard};
            margin-bottom: ${theme.spacing.s}px;
          `}
        >
          {props.heading}
        </Typography>
        <Typography
          variant="body2"
          css={css`
            color: ${theme.colors.theme.primary.standard};
          `}
        >
          {props.body}
        </Typography>
      </div>
    </div>
  );
};
