/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { useTheme } from '../../../../theming/themes';
import { Typography } from '../../../atoms/Typography';

type ListCardProps = {
  headingIcon: React.ReactNode;
  heading: string;
  listItems: { component: React.ReactNode; isActive: boolean }[];
};

export const ListCard: React.FC<ListCardProps> = props => {
  const theme = useTheme();

  return (
    <div
      css={css`
        background-color: ${theme.colors.theme.background.standard};
      `}
    >
      {props.headingIcon}
      <Typography
        variant="h4"
        css={css`
          color: ${theme.colors.theme.primary.standard};
        `}
      >
        {props.heading}
      </Typography>
      <ul>
        {props.listItems.map((item, index) => (
          <li key={index}>
            <div>Dot</div>
            {item.component}
          </li>
        ))}
      </ul>
    </div>
  );
};
