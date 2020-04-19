/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { useTheme } from '../../../theming/themes';
import { Link } from '../../atoms/Link';
import { ThemeSwitch } from '../../atoms/ThemeSwitch';

type HeaderProps = {
  onClickSwitchTheme: () => void;
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
          <Link typography="body1" href="#bio">
            Bio
          </Link>
        </li>
        <li>
          <Link typography="body1" href="#works">
            Works
          </Link>
        </li>
        <li>
          <Link typography="body1" href="#contact">
            Contact
          </Link>
        </li>
      </ul>
      <ThemeSwitch
        onClick={props.onClickSwitchTheme}
        css={css`
          right: 0;
          top: -2px;
          position: absolute;
        `}
      ></ThemeSwitch>
    </div>
  );
};
