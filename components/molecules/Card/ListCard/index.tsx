/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { CARD_MAX_WIDTH, CARD_MIN_WIDTH } from '../../../../libs/media';
import {
  ThemeColors,
  useTheme,
  ThemeSpacing,
} from '../../../../theming/themes';
import { SvgIconComponent } from '../../../atoms/icons/types';
import { Typography } from '../../../atoms/Typography';

const iconSize = 48;
const headingIconYOffset = iconSize / 2;
const roundDotSize = 12;
const roundDotBorderWidth = 4;
const roundDotFullSize = roundDotSize + roundDotBorderWidth;
const listLineWidth = 2;

const RoundDot: React.FC<{
  isActive?: boolean;
}> = ({ isActive, ...restProps }) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        width: ${roundDotSize}px;
        height: ${roundDotSize}px;
        border: ${roundDotBorderWidth}px solid
          ${theme.colors.theme.background.standard};
        top: ${roundDotSize / 2 - 7}px;
        left: -${(roundDotFullSize + listLineWidth) / 2}px;
        border-radius: 50%;
        position: absolute;
        background-color: ${isActive
          ? theme.colors.global.red0
          : theme.colors.global.gray2};
      `}
      {...restProps}
    ></div>
  );
};

export type ListCardProps = {
  headingIcon: SvgIconComponent;
  heading: string;
  listItems: { component: React.ReactNode; isActive?: boolean }[];
  color?: keyof ThemeColors['primary'];
  backgroundColor?: keyof ThemeColors['background'];
  margin?: keyof ThemeSpacing;
};

export const ListCard: React.FC<ListCardProps> = ({
  headingIcon,
  heading,
  listItems,
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
        max-width: ${CARD_MAX_WIDTH};
        min-width: ${CARD_MIN_WIDTH};
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
        <ul>
          {listItems.map((item, index) => (
            <li
              key={index}
              css={css`
                position: relative;

                :not(:last-child) > .item-text {
                  border-left: ${listLineWidth}px solid
                    ${theme.colors.global.gray4};
                  padding-bottom: ${theme.spacing.m};
                }
              `}
            >
              <RoundDot isActive={item.isActive} />
              <div
                className="item-text"
                css={css`
                  border-left: ${listLineWidth}px solid
                    ${theme.colors.theme.background.standard};
                  padding-left: ${theme.spacing.m};
                `}
              >
                <Typography variant="body2" color={color}>
                  {item.component}
                </Typography>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};
