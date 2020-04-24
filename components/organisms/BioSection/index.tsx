/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { useTheme } from '../../../theming/themes';
import { InterestIcon } from '../../atoms/icons/InterestIcon';
import { Layout } from '../../atoms/Layout';
import { Typography } from '../../atoms/Typography';
import { ArticleCard } from '../../molecules/Card/ArticleCard';

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
          variant={'h3'}
          css={css`
            color: ${theme.colors.theme.primary.standard};
            text-align: center;
            margin-bottom: ${theme.spacing.m}px;
          `}
        >
          Bio
        </Typography>
        <ArticleCard
          headingIcon={InterestIcon}
          heading="HOBBIES"
          body="Nogizaka46, web dev, UI design, covering, Karaoke"
        />
      </div>
    </Layout>
  );
};
