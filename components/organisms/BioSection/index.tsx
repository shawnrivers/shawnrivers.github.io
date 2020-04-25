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
import { EducationIcon } from '../../atoms/icons/EducationIcon';
import { JobIcon } from '../../atoms/icons/JobIcon';

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
            margin={theme.spacing.s}
            customCSS={css`
              flex: 1;
            `}
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
          />
          <ListCard
            headingIcon={EducationIcon}
            heading="EDUCATION"
            margin={theme.spacing.s}
            customCSS={css`
              flex: 1;
            `}
            listItems={[
              {
                component: (
                  <Typography
                    variant="body2"
                    customCSS={css`
                      color: ${theme.colors.theme.primary.standard};
                    `}
                  >
                    Northeastern University{' '}
                    <span
                      css={css`
                        color: ${theme.colors.theme.primary.variant2};
                      `}
                    >
                      (China)
                    </span>
                    , <br />
                    Digital Media
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
                    Nagoya University{' '}
                    <span
                      css={css`
                        color: ${theme.colors.theme.primary.variant2};
                      `}
                    >
                      (Japan)
                    </span>
                    , <br />
                    Society and Media Studies
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
                    University of Tokyo{' '}
                    <span
                      css={css`
                        color: ${theme.colors.theme.primary.variant2};
                      `}
                    >
                      (Japan)
                    </span>
                    , <br />
                    Computer Graphics
                  </Typography>
                ),
              },
            ]}
          />
          <ListCard
            headingIcon={JobIcon}
            heading="JOBS"
            margin={theme.spacing.s}
            customCSS={css`
              flex: 1;
            `}
            listItems={[
              {
                component: (
                  <Typography
                    variant="body2"
                    customCSS={css`
                      color: ${theme.colors.theme.primary.standard};
                    `}
                  >
                    eureka, Inc.{' '}
                    <span
                      css={css`
                        color: ${theme.colors.theme.primary.variant2};
                      `}
                    >
                      (intern)
                    </span>
                    <br />
                    Web Front-end Engineer
                  </Typography>
                ),
              },
              {
                component: (
                  <Typography
                    variant="body2"
                    customCSS={css`
                      color: ${theme.colors.theme.primary.standard};
                      overflow-wrap: break-word;
                    `}
                  >
                    SHOWROOM Inc.{' '}
                    <span
                      css={css`
                        color: ${theme.colors.theme.primary.variant2};
                      `}
                    >
                      (intern)
                    </span>
                    <br />
                    Web Front-end Engineer
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
                    eureka, Inc.
                    <br />
                    Web Front-end Engineer
                  </Typography>
                ),
              },
            ]}
          />
          <ArticleCard
            headingIcon={InterestIcon}
            margin={theme.spacing.s}
            customCSS={css`
              flex: 1;
            `}
            heading="HOBBIES"
            body="Nogizaka46, web dev, UI design, covering, Karaoke"
          />
        </div>
      </div>
    </Layout>
  );
};
