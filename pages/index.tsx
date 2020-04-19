/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import { NextPage } from 'next';
import { useTheme } from '../theming/themes';
import { Typography } from '../components/atoms/Typography';

const IndexPage: NextPage = () => {
  const theme = useTheme();

  return (
    <>
      <Typography
        variant="h1"
        css={css`
          color: ${theme.colors.theme.primary.standard};
        `}
      >
        Home Page
      </Typography>
      <Typography
        variant="body1"
        css={css`
          color: ${theme.colors.theme.primary.standard};
        `}
      >
        Current theme: {theme.key}
      </Typography>
    </>
  );
};

export default IndexPage;
