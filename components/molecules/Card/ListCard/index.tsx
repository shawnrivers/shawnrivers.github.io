/**@jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core';
import * as React from 'react';
import { useTheme } from '../../../../theming/themes';
import { Typography } from '../../../atoms/Typography';
import { SvgIconComponent } from '../../../atoms/icons/types';
import { CARD_MAX_WIDTH, CARD_MIN_WIDTH } from '../../../../libs/media';

const roundDotSize = 12;
const roundDotBorderWidth = 4;
const roundDotFullSize = roundDotSize + roundDotBorderWidth;
const listLineWidth = 2;

const RoundDot: React.FC<{
  isActive?: boolean;
  customCSS?: SerializedStyles;
}> = props => {
  const theme = useTheme();

  return (
    <div
      css={[
        css`
          width: ${roundDotSize}px;
          height: ${roundDotSize}px;
          border: ${roundDotBorderWidth}px solid
            ${theme.colors.theme.background.standard};
          top: ${roundDotSize / 2 - 7}px;
          left: -${(roundDotFullSize + listLineWidth) / 2}px;
          border-radius: 50%;
          position: absolute;
          background-color: ${props.isActive
            ? theme.colors.global.red0
            : theme.colors.global.grey2};
        `,
        props.customCSS,
      ]}
    ></div>
  );
};

type ListCardProps = {
  headingIcon: SvgIconComponent;
  heading: string;
  listItems: { component: React.ReactNode; isActive?: boolean }[];
  margin?: number;
  customCSS?: SerializedStyles;
};

export const ListCard: React.FC<ListCardProps> = ({
  headingIcon,
  heading,
  listItems,
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
          max-width: ${CARD_MAX_WIDTH}px;
          min-width: ${CARD_MIN_WIDTH}px;
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
        <ul>
          {listItems.map((item, index) => (
            <li
              key={index}
              css={css`
                position: relative;

                :not(:last-child) > .item-text {
                  border-left: ${listLineWidth}px solid
                    ${theme.colors.global.grey4};
                  padding-bottom: ${theme.spacing.m}px;
                }
              `}
            >
              <RoundDot isActive={item.isActive} />
              <div
                className="item-text"
                css={css`
                  border-left: ${listLineWidth}px solid
                    ${theme.colors.theme.background.standard};
                  padding-left: ${theme.spacing.m}px;
                `}
              >
                {item.component}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
