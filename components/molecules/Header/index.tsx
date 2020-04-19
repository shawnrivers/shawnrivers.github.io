/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { useTheme } from '../../../theming/themes';
import { DarkModeIcon } from '../../atoms/icons/DarkModeIcon';
import { LightModeIcon } from '../../atoms/icons/LightModeIcon';

type HeaderProps = {
  onChangeTheme: () => void;
};

export const Header: React.FC<HeaderProps> = props => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        position: relative;
      `}
    >
      <ul
        css={css`
          color: ${theme.colors.theme.primary.standard};
          display: flex;
          margin: auto;

          li:not(:last-child) {
            margin-right: ${theme.spacing.m}px;
          }
        `}
      >
        <li>
          <a href="#bio">Bio</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button
        onClick={props.onChangeTheme}
        css={css`
          right: 0;
          position: absolute;
        `}
      >
        {theme.key === 'light' ? (
          <DarkModeIcon fill={theme.colors.theme.primary.standard} />
        ) : (
          <LightModeIcon fill={theme.colors.theme.primary.standard} />
        )}
      </button>
    </div>
  );
};
