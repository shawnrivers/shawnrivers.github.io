/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { useTheme } from '../../../theming/themes';
import { InterestIcon } from '../../atoms/icons/InterestIcon';
import { Layout } from '../../atoms/Layout';
import { Typography } from '../../atoms/Typography';
import { ArticleCard } from '../../molecules/Card/ArticleCard';
import { ListCard } from '../../molecules/Card/ListCard';
import { LocationIcon } from '../../atoms/icons/LocationIcon';

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
            heading="LOCATIONS"
            listItems={[
              {
                component: (
                  <Typography
                    variant="body2"
                    customCSS={css`
                      color: ${theme.colors.theme.primary.standard};
                    `}
                  >
                    Fuzhou, China
                  </Typography>
                ),
              },
              {
                component: (
                  <Typography
                    variant="body2"
                    customCSS={css`
                      color: ${theme.colors.theme.primary.standard};
                    `}
                  >
                    Shenyang, China
                  </Typography>
                ),
              },
              {
                component: (
                  <Typography
                    variant="body2"
                    customCSS={css`
                      color: ${theme.colors.theme.primary.standard};
                    `}
                  >
                    Nogoya, Japan
                  </Typography>
                ),
              },
              {
                component: (
                  <Typography
                    variant="body2"
                    customCSS={css`
                      color: ${theme.colors.theme.primary.standard};
                    `}
                  >
                    Tokyo, Japan
                  </Typography>
                ),
                isActive: true,
              },
            ]}
            margin={theme.spacing.m}
            customCSS={css`
              flex: 1;
            `}
          />
          <ArticleCard
            headingIcon={InterestIcon}
            heading="HOBBIES"
            body="Nogizaka46, web dev, UI design, covering, Karaoke"
            margin={theme.spacing.m}
            customCSS={css`
              flex: 1;
            `}
          />
        </div>
      </div>
    </Layout>
  );
};
