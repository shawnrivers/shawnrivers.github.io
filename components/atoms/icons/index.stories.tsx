/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import { themes } from '../../../theming/themes';
import { LightModeIcon } from './LightModeIcon';
import { DarkModeIcon } from './DarkModeIcon';
import { Typography } from '../Typography';
import { ThemeDecorator } from '../../../.storybook/libs/ThemeDecorator';
import { LocationIcon } from './LocationIcon';
import { EducationIcon } from './EducationIcon';
import { InterestIcon } from './InterestIcon';
import { JobIcon } from './JobIcon';
import { ArrowIcon } from './ArrowIcon';
import { TwitterIcon } from './TwitterIcon';

export default {
  title: 'Icons',
  decorators: [ThemeDecorator(), withKnobs],
};

const icons = [
  LightModeIcon,
  DarkModeIcon,
  LocationIcon,
  EducationIcon,
  InterestIcon,
  JobIcon,
  ArrowIcon,
  TwitterIcon,
];

export const All: React.FC = () => {
  const colorTheme = themes.light;

  const size = number('Icon Size', 36, {
    range: true,
    min: 16,
    max: 72,
    step: 1,
  });

  const iconColor = select(
    'Icon Color',
    colorTheme.colors.global,
    colorTheme.colors.global.grey0
  );

  return (
    <div
      css={css`
        padding: 24px;
      `}
    >
      {icons.map(Icon => (
        <div
          key={Icon.name}
          css={css`
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            color: ${colorTheme.colors.global.grey0};
          `}
        >
          <Icon
            title={Icon.displayName}
            fill={iconColor}
            width={size}
            height={size}
            css={css`
              margin-right: 12px;
            `}
          />
          <Typography variant="body1">{Icon.displayName}</Typography>
        </div>
      ))}
    </div>
  );
};
