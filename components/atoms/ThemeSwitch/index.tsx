/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { useTheme } from '../../../theming/themes';
import { DarkModeIcon } from '../icons/DarkModeIcon';
import { LightModeIcon } from '../icons/LightModeIcon';
import { ButtonBase, ButtonBaseProps } from '../buttons/ButtonBase';

type ThemeSwitchProps = ButtonBaseProps & {
  onClick: () => void;
};

export const ThemeSwitch: React.FC<ThemeSwitchProps> = props => {
  const theme = useTheme();

  return (
    <ButtonBase
      css={css`
        width: 32px;
        height: 32px;
      `}
      aria-label="Switch theme"
      {...props}
    >
      <div
        css={css`
          overflow: hidden;
          width: 24px;
          height: 24px;
          margin: auto;

          & * {
            margin: 0;
            padding: 0;
            transition: transform 0.5s ease-out, opacity 0.3s ease-out;
          }
        `}
      >
        <DarkModeIcon
          fill={theme.colors.theme.primary.standard}
          width="24"
          height="24"
          title="Dark mode"
          css={css`
            margin: 0;
            transform: translateY(${theme.key === 'dark' ? 0 : -27}px);
            opacity: ${theme.key === 'dark' ? '1' : '0'};
          `}
        />
        <LightModeIcon
          fill={theme.colors.theme.primary.standard}
          width="24"
          height="24"
          title="Light mode"
          css={css`
            transform: translateY(${theme.key === 'dark' ? 0 : -27}px);
            opacity: ${theme.key === 'dark' ? '0' : '1'};
          `}
        />
      </div>
    </ButtonBase>
  );
};
