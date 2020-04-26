/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import * as BioData from '../../../data/bio';
import { useTheme } from '../../../theming/themes';
import { EducationIcon } from '../../atoms/icons/EducationIcon';
import { InterestIcon } from '../../atoms/icons/InterestIcon';
import { JobIcon } from '../../atoms/icons/JobIcon';
import { LocationIcon } from '../../atoms/icons/LocationIcon';
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
          variant={'h3'}
          css={css`
            color: ${theme.colors.theme.primary.standard};
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
          <ListCard
            headingIcon={LocationIcon}
            heading="Locations"
            margin={theme.spacing.s}
            color="standard"
            backgroundColor="standard"
            listItems={BioData.locations}
            css={css`
              flex: 1;
            `}
          />
          <ListCard
            headingIcon={EducationIcon}
            heading="Education"
            margin={theme.spacing.s}
            color="standard"
            backgroundColor="standard"
            listItems={BioData.education}
            css={css`
              flex: 1;
            `}
          />
          <ListCard
            headingIcon={JobIcon}
            heading="Jobs"
            margin={theme.spacing.s}
            color="standard"
            backgroundColor="standard"
            listItems={BioData.jobs}
            css={css`
              flex: 1;
            `}
          />
          <ArticleCard
            headingIcon={InterestIcon}
            margin={theme.spacing.s}
            color="standard"
            backgroundColor="standard"
            heading="Hobbies"
            body={BioData.hobbies}
            css={css`
              flex: 1;
            `}
          />
        </div>
      </div>
    </Layout>
  );
};
