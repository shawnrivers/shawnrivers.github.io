/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { CARD_MAX_WIDTH, CARD_MIN_WIDTH } from '../../../../libs/media';
import { ThemeColors, useTheme } from '../../../../theming/themes';
import { CircleIcon } from '../../../atoms/CircleIcon';
import { CircleImage } from '../../../atoms/CircleImage';
import { ArrowIcon } from '../../../atoms/icons/ArrowIcon';
import { Typography } from '../../../atoms/Typography';

const iconSize = 128;
const headingIconYOffset = iconSize / 2;

export type LinkCardProps = {
  to: string;
  headingIcon: {
    src: string;
    srcSet: string;
    size: number;
  };
  badgeIcon?: React.ReactNode;
  heading: string;
  body: string;
  color?: keyof ThemeColors['primary'];
  backgroundColor?: keyof ThemeColors['background'];
  margin?: number;
};

export const LinkCard: React.FC<LinkCardProps> = ({
  to,
  headingIcon,
  badgeIcon,
  heading,
  body,
  color = 'standard',
  backgroundColor = 'standard',
  margin = 0,
  ...restProps
}) => {
  const theme = useTheme();

  return (
    <a href={to}>
      <div
        css={css`
          background-color: ${theme.colors.theme.background[backgroundColor]};
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          margin: ${margin + headingIconYOffset}px ${margin}px ${margin}px;
          max-width: ${CARD_MAX_WIDTH}px;
          min-width: ${CARD_MIN_WIDTH}px;
          border-radius: 8px;
          height: auto;
        `}
        {...restProps}
      >
        <div
          css={css`
            position: relative;
          `}
        >
          <CircleImage
            src={headingIcon.src}
            srcSet={headingIcon.srcSet}
            alt={heading}
            width={headingIcon.size}
            css={css`
              background-color: ${theme.colors.theme.primary[color]};
              border: 4px solid ${theme.colors.theme.primary[color]};
              margin: -${headingIconYOffset}px 0 ${theme.spacing.s}px;
            `}
          />
          {badgeIcon ? (
            <div
              css={css`
                position: absolute;
                bottom: 18px;
                right: 0;
              `}
            >
              {badgeIcon}
            </div>
          ) : null}
        </div>
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
        <div
          css={css`
            position: absolute;
            bottom: -18px;
            right: -16px;
          `}
        >
          <CircleIcon
            icon={ArrowIcon}
            size={40}
            color="inverse"
            backgroundColor="inverse"
          />
        </div>
      </div>
    </a>
  );
};
