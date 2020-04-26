/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { SvgIconComponent } from '../icons/types';
import { useTheme, ThemeColors } from '../../../theming/themes';
import { GlobalColor } from '../../../theming/colors';

type CircleIconProps = {
  icon: SvgIconComponent;
  size?: number;
  color?: keyof ThemeColors['primary'] | GlobalColor;
  backgroundColor?: keyof ThemeColors['background'] | GlobalColor;
};

const padding = 3;

export const CircleIcon: React.FC<CircleIconProps> = ({
  icon,
  size = 24,
  color = 'standard',
  backgroundColor = 'standard',
}) => {
  const theme = useTheme();
  const Icon = icon;
  const colors = React.useMemo(
    () => ({ ...theme.colors.global, ...theme.colors.theme.primary }),
    [theme]
  );
  const backgroundColors = React.useMemo(
    () => ({ ...theme.colors.global, ...theme.colors.theme.background }),
    [theme]
  );

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${size}px;
        height: ${size}px;
        background-color: ${backgroundColors[backgroundColor]};
        border-radius: 50%;
        padding: ${padding}px;
      `}
    >
      <Icon
        fill={colors[color]}
        width={size - padding * 2}
        height={size - padding * 2}
        title="Twitter"
      />
    </div>
  );
};
