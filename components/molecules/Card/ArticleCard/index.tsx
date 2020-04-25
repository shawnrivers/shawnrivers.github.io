/**@jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core';
import * as React from 'react';
import { CARD_WIDTH } from '../../../../libs/media';
import { useTheme } from '../../../../theming/themes';
import { SvgIconComponent } from '../../../atoms/icons/types';
import { Typography } from '../../../atoms/Typography';

type ArticleCardProps = {
  headingIcon: SvgIconComponent;
  heading: string;
  body: string;
  margin?: number;
  customCSS?: SerializedStyles;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  headingIcon,
  heading,
  body,
  margin = 0,
  customCSS,
}) => {
  const theme = useTheme();

  const headingIconYOffset = theme.spacing.m;
  const HeadingIcon = headingIcon;

  return (
    <div
      css={[
        css`
          background-color: ${theme.colors.theme.background.standard};
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: ${margin + headingIconYOffset}px ${margin}px ${margin}px;
          max-width: ${CARD_WIDTH}px;
          border-radius: 8px;
          height: 100%;
        `,
        customCSS,
      ]}
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
          customCSS={css`
            color: ${theme.colors.theme.primary.standard};
            margin-bottom: ${theme.spacing.s}px;
          `}
        >
          {heading}
        </Typography>
        <Typography
          variant="body2"
          customCSS={css`
            color: ${theme.colors.theme.primary.standard};
          `}
        >
          {body}
        </Typography>
      </div>
    </div>
  );
};
