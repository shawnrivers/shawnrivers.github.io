/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Layout } from '../../atoms/Layout';
import { Typography } from '../../atoms/Typography';
import { useTheme } from '../../../theming/themes';
import { LinkCard } from '../../molecules/Card/LinkCard';
import nogizakalib1x from '../../images/nogizakalib-1x.jpg';
import nogizakalib2x from '../../images/nogizakalib-2x.jpg';
import nogizakalib3x from '../../images/nogizakalib-3x.jpg';
import { TwitterIcon } from '../../atoms/icons/TwitterIcon';
import { CircleIcon } from '../../atoms/CircleIcon';

export const WorksSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Layout element="section" backgroundColor="standard">
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <Typography
          variant={'h3'}
          css={css`
            color: ${theme.colors.theme.primary.standard};
            text-align: center;
            margin-bottom: ${theme.spacing.m}px;
          `}
        >
          Works
        </Typography>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >
          <LinkCard
            to="https://shawnrivers.github.io/nogizaka-lib-redesign/"
            headingIcon={{
              src: nogizakalib1x,
              srcSet: `${nogizakalib1x} 1x, ${nogizakalib2x} 2x, ${nogizakalib3x} 3x`,
              width: 128,
            }}
            heading="Nogizaka Lib"
            body="A web application showing the information about Nogizaka46 in a user-friendly way"
            color="standard"
            backgroundColor="variant0"
            margin={theme.spacing.s}
            customCSS={css`
              flex: 1;
            `}
          />
          <LinkCard
            to="https://twitter.com/n46_news"
            headingIcon={{
              src: nogizakalib1x,
              srcSet: `${nogizakalib1x} 1x, ${nogizakalib2x} 2x, ${nogizakalib3x} 3x`,
              width: 128,
            }}
            badgeIcon={
              <CircleIcon
                icon={TwitterIcon}
                size={30}
                color="white"
                backgroundColor="twitter"
              />
            }
            heading="Nogizaka News"
            body="A Twitter Bot for retweeting Nogizaka46 news and tweeting members' schedules"
            color="standard"
            backgroundColor="variant0"
            margin={theme.spacing.s}
            customCSS={css`
              flex: 1;
            `}
          />
        </div>
      </div>
    </Layout>
  );
};
