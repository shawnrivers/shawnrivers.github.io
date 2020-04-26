/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { ThemeColors, useTheme } from '../../../theming/themes';
import { Layout } from '../../atoms/Layout';
import { ThemeSwitch } from '../../atoms/ThemeSwitch';
import { Typography } from '../../atoms/Typography';

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
            <a href="#bio">
              <Typography variant="body1" color={color}>
                Bio
              </Typography>
            </a>
          </li>
          <li>
            <a href="#works">
              <Typography variant="body1" color={color}>
                Works
              </Typography>
            </a>
          </li>
          <li>
            <a href="#contact">
              <Typography variant="body1" color={color}>
                Contact
              </Typography>
            </a>
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
