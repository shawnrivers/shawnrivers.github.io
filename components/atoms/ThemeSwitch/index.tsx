/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { useTheme } from '../../../theming/themes';
import { DarkModeIcon } from '../icons/DarkModeIcon';
import { LightModeIcon } from '../icons/LightModeIcon';

type ThemeSwitchProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
};

export const ThemeSwitch: React.FC<ThemeSwitchProps> = props => {
  const theme = useTheme();

  return (
    <button
      css={css`
        width: 24px;
        height: 24px;
        overflow: hidden;
      `}
      aria-label="Switch theme"
      {...props}
    >
      <div
        css={css`
          position: absolute;
          transform: translateY(${theme.key === 'dark' ? -12 : -40}px);
          transition: transform 0.5s ease-in-out;
        `}
      >
        <DarkModeIcon
          fill={theme.colors.theme.primary.standard}
          title="Dark mode"
          css={css`
            margin: 0;
          `}
        />
        <LightModeIcon
          fill={theme.colors.theme.primary.standard}
          title="Light mode"
        />
      </div>
    </button>
  );
};
