/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Link } from '../../atoms/Link';
import { ThemeSwitch } from '../../atoms/ThemeSwitch';
import { useTheme, ThemeColors } from '../../../theming/themes';
import { Layout } from '../../atoms/Layout';

type HeaderProps = {
  color?: keyof ThemeColors['primary'];
  backgroundColor?: keyof ThemeColors['background'];
  onClickSwitchTheme: () => void;
} & React.HTMLAttributes<HTMLElement>;

export const Header: React.FC<HeaderProps> = ({
  color = 'standard',
  backgroundColor = 'standard',
  onClickSwitchTheme,
  ...restProps
}) => {
  const theme = useTheme();

  return (
    <Layout element="header" backgroundColor={backgroundColor} {...restProps}>
      <div
        css={css`
          display: flex;
          justify-content: center;
          position: relative;
        `}
      >
        <ul
          css={css`
            color: ${theme.colors.theme.primary[color]};
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
          onClick={onClickSwitchTheme}
          css={css`
            right: 0;
            top: -2px;
            position: absolute;
          `}
        ></ThemeSwitch>
      </div>
    </Layout>
  );
};
