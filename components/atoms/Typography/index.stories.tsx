/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Typography } from '.';
import { ThemeDecorator } from '../../../.storybook/libs/ThemeDecorator';
import { themes } from '../../../theming/themes';
import { withKnobs, radios } from '@storybook/addon-knobs';

export default {
  title: 'Typography',
  decorators: [ThemeDecorator(), withKnobs],
};

export const All: React.FC = () => {
  const themeKey = radios(
    'Color Theme',
    {
      Light: 'light',
      Dark: 'dark',
    },
    'light'
  );

  const colorTheme = themes[themeKey];

  return (
    <div
      css={css`
        padding: 24px;
        color: ${colorTheme.colors.theme.primary.standard};
        background-color: ${colorTheme.colors.theme.background.standard};
      `}
    >
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <Typography variant="caption">Caption</Typography>
    </div>
  );
};
