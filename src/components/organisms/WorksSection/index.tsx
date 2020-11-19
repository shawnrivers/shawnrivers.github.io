/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { useTheme } from '../../../theming/themes';
import { CircleIcon } from '../../atoms/CircleIcon';
import { Layout } from '../../atoms/Layout';
import { Typography } from '../../atoms/Typography';
import { LinkCard } from '../../molecules/Card/LinkCard';
import { worksData } from '../../../data/works';

export const WorksSection: React.FC<React.HTMLAttributes<
  HTMLElement
>> = props => {
  const theme = useTheme();

  return (
    <Layout element="section" backgroundColor="standard" {...props}>
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
            margin-bottom: ${theme.spacing.m};
          `}
        >
          #Works
        </Typography>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          `}
        >
          {worksData.map(workData => (
            <LinkCard
              key={workData.heading}
              to={workData.url}
              headingIcon={{
                size: 128,
                ...workData.headingIcon,
              }}
              badgeIcon={
                workData.badgeIcon ? (
                  <CircleIcon size={30} {...workData.badgeIcon} />
                ) : undefined
              }
              heading={workData.heading}
              body={workData.body}
              color="standard"
              backgroundColor="variant0"
              margin="s"
              css={css`
                flex: 1;
              `}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
