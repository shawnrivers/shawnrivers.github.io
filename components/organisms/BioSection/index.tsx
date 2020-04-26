/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { bioData } from '../../../data/bio';
import { useTheme } from '../../../theming/themes';
import { Layout } from '../../atoms/Layout';
import { Typography } from '../../atoms/Typography';
import { ArticleCard } from '../../molecules/Card/ArticleCard';
import { ListCard } from '../../molecules/Card/ListCard';

export const BioSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Layout element="section" backgroundColor="variant0">
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <Typography
          variant="h3"
          color="standard"
          css={css`
            text-align: center;
            margin-bottom: ${theme.spacing.m}px;
          `}
        >
          Bio
        </Typography>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >
          {bioData.map(bio =>
            bio.type === 'list' ? (
              <ListCard
                {...bio.data}
                key={bio.data.heading}
                margin={theme.spacing.s}
                color="standard"
                backgroundColor="standard"
                css={css`
                  flex: 1;
                `}
              />
            ) : (
              <ArticleCard
                {...bio.data}
                key={bio.data.heading}
                margin={theme.spacing.s}
                color="standard"
                backgroundColor="standard"
                css={css`
                  flex: 1;
                `}
              />
            )
          )}
        </div>
      </div>
    </Layout>
  );
};
