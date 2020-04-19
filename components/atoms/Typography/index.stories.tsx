import * as React from 'react';
import { Typography } from '.';
import { ThemeDecorator } from '../../../.storybook/libs/ThemeDecorator';

export default {
  title: 'Typography',
  decorators: [ThemeDecorator()],
};

export const All: React.FC = () => (
  <>
    <Typography variant="h1">Heading 1</Typography>
    <Typography variant="h2">Heading 2</Typography>
    <Typography variant="h3">Heading 3</Typography>
    <Typography variant="h4">Heading 4</Typography>
    <Typography variant="body1">Body 1</Typography>
    <Typography variant="body2">Body 2</Typography>
    <Typography variant="caption">Caption</Typography>
  </>
);
