/**@jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core';
import * as React from 'react';
import { CARD_MAX_WIDTH, CARD_MIN_WIDTH } from '../../../../libs/media';
import { useTheme } from '../../../../theming/themes';
import { SvgIconComponent } from '../../../atoms/icons/types';
import { Typography } from '../../../atoms/Typography';

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

export type ListCardProps = {
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
          customCSS={css`
            color: ${theme.colors.theme.primary.standard};
            margin-bottom: ${theme.spacing.s}px;
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
                <Typography
                  variant="body2"
                  customCSS={css`
                    color: ${theme.colors.theme.primary.standard};
                  `}
                >
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
