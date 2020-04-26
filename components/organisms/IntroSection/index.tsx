/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import * as IntroData from '../../../data/intro';
import { SP_EDGE } from '../../../libs/media';
import { useTheme } from '../../../theming/themes';
import { CircleImage } from '../../atoms/CircleImage';
import { TwitterIcon } from '../../atoms/icons/TwitterIcon';
import { Layout } from '../../atoms/Layout';
import { Link } from '../../atoms/Link';
import { Typography } from '../../atoms/Typography';
import profile1x from '../../images/profile-1x.jpg';
import profile2x from '../../images/profile-2x.jpg';
import profile3x from '../../images/profile-3x.jpg';

export const IntroSection: React.FC<React.HTMLAttributes<
  HTMLElement
>> = props => {
  const theme = useTheme();

  return (
    <Layout element="section" backgroundColor="standard" {...props}>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-bottom: ${theme.spacing.l}px;

          @media (max-width: ${SP_EDGE}px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        `}
      >
        <CircleImage
          src={profile1x}
          srcSet={`${profile1x} 1x, ${profile2x} 2x, ${profile3x} 3x`}
          alt="Yuxiao He"
          width={128}
          css={css`
            background-color: ${theme.colors.global.white};
            border: 4px solid ${theme.colors.theme.primary.standard};
            margin-bottom: 0;
            margin-right: ${theme.spacing.l}px;

            @media (max-width: ${SP_EDGE}px) {
              margin-bottom: ${theme.spacing.s}px;
              margin-right: 0;
            }
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: center;

            @media (max-width: ${SP_EDGE}px) {
              align-items: center;
            }
          `}
        >
          <Typography
            variant="h2"
            color="standard"
            css={css`
              margin-bottom: ${theme.spacing.xs}px;
            `}
          >
            Yuxiao He
          </Typography>
          <Typography
            variant="h4"
            color="variant2"
            css={css`
              margin-bottom: ${theme.spacing.xs}px;
            `}
          >
            Usho Ka (JA)
          </Typography>
          <div
            css={css`
              display: flex;
              align-items: center;
            `}
          >
            <TwitterIcon
              fill={theme.colors.theme.primary.variant0}
              title="Twitter"
              css={css`
                margin-right: ${theme.spacing.xxs};
              `}
            />
            <Link
              href="https://twitter.com/yuxiao_he"
              typography="body1"
              css={css`
                color: ${theme.colors.theme.primary.variant0};
              `}
            >
              @yuxiao_he
            </Link>
          </div>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          margin: ${theme.spacing.s}px;
        `}
      >
        <div
          css={css`
            padding: ${theme.spacing.m}px ${theme.spacing.l}px;
            background-color: ${theme.colors.theme.background.variant0};
            border-radius: 8px;
            text-align: center;
            display: inline-block;
          `}
        >
          <Typography variant="h4" color="standard">
            {IntroData.intro}
          </Typography>
        </div>
      </div>
    </Layout>
  );
};
