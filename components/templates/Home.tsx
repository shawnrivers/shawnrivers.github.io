/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Typography } from '../../components/atoms/Typography';
import { useTheme, Theme } from '../../theming/themes';
import { Layout } from '../atoms/Layout';
import { CircleImage } from '../atoms/CircleImage';
import profile1x from '../images/profile-1x.jpg';
import profile2x from '../images/profile-2x.jpg';
import profile3x from '../images/profile-3x.jpg';
import { Link } from '../atoms/Link';
import { TwitterIcon } from '../atoms/icons/TwitterIcon';
import { SP_EDGE } from '../../libs/media';

type SectionProps = {
  theme: Theme;
};

const IntroSection: React.FC<SectionProps> = ({ theme }) => (
  <Layout element="section" backgroundColor="standard">
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

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
        css={css`
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

          @media (max-width: ${SP_EDGE}px) {
            align-items: center;
          }
        `}
      >
        <Typography
          variant="h2"
          css={css`
            color: ${theme.colors.theme.primary.standard};
            margin-bottom: ${theme.spacing.xs}px;
          `}
        >
          Yuxiao He
        </Typography>
        <Typography
          variant="h4"
          css={css`
            color: ${theme.colors.theme.primary.variant2};
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
  </Layout>
);

export const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <IntroSection theme={theme} />
    </React.Fragment>
  );
};
