/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Layout } from '../../atoms/Layout';
import { Typography } from '../../atoms/Typography';
import { useTheme } from '../../../theming/themes';
import { LinkCard } from '../../molecules/Card/LinkCard';
import { CircleIcon } from '../../atoms/CircleIcon';
import * as WorksData from '../../../data/works';

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
            to={WorksData.nogizakaLib.url}
            headingIcon={{
              size: 128,
              ...WorksData.nogizakaLib.headingIcon,
            }}
            badgeIcon={
              WorksData.nogizakaLib.badgeIcon ? (
                <CircleIcon size={30} {...WorksData.nogizakaLib.badgeIcon} />
              ) : undefined
            }
            heading={WorksData.nogizakaLib.heading}
            body={WorksData.nogizakaLib.body}
            color="standard"
            backgroundColor="variant0"
            margin={theme.spacing.s}
            customCSS={css`
              flex: 1;
            `}
          />
          <LinkCard
            to={WorksData.nogizakaNews.url}
            headingIcon={{
              size: 128,
              ...WorksData.nogizakaNews.headingIcon,
            }}
            badgeIcon={
              <CircleIcon size={30} {...WorksData.nogizakaNews.badgeIcon} />
            }
            heading={WorksData.nogizakaNews.heading}
            body={WorksData.nogizakaNews.body}
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
