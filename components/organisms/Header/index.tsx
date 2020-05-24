/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { ThemeColors, useTheme } from '../../../theming/themes';
import { Layout } from '../../atoms/Layout';
import { ThemeSwitch } from '../../atoms/ThemeSwitch';
import { Typography } from '../../atoms/Typography';
import { LinkBase } from '../../atoms/buttons/LinkBase';

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
          align-items: center;
          justify-content: center;
        `}
      >
        <ul
          css={css`
            color: ${theme.colors.theme.primary[color]};
            display: flex;
            margin: auto;
          `}
        >
          <li>
            <LinkBase href="#bio">
              <Typography variant="body1" color={color}>
                #Bio
              </Typography>
            </LinkBase>
          </li>
          <li>
            <LinkBase href="#works">
              <Typography variant="body1" color={color}>
                #Works
              </Typography>
            </LinkBase>
          </li>
          <li>
            <LinkBase href="#contact">
              <Typography variant="body1" color={color}>
                #Contact
              </Typography>
            </LinkBase>
          </li>
        </ul>
        <ThemeSwitch
          color={color}
          onClick={onClickSwitchTheme}
          css={css`
            right: 0;
          `}
        ></ThemeSwitch>
      </div>
    </Layout>
  );
};
