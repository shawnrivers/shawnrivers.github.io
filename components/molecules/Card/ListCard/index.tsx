/**@jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core';
import * as React from 'react';
import { useTheme } from '../../../../theming/themes';
import { Typography } from '../../../atoms/Typography';
import { SvgIconComponent } from '../../../atoms/icons/types';
import { CARD_WIDTH } from '../../../../libs/media';

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
          `}
        >
          {heading}
        </Typography>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              <div>Dot</div>
              {item.component}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
