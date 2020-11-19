/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Typography } from '../atoms/Typography';
import { AnchorBase } from '../atoms/buttons/AnchorBase';
import { Layout } from '../atoms/Layout';

export const OldNogilib: React.FC = () => {
  return (
    <Layout
      backgroundColor="standard"
      css={css`
        height: 100%;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: auto;
          max-width: 60rem;
        `}
      >
        <Typography
          variant="h1"
          css={css`
            margin-top: 1em;
            text-align: center;
          `}
        >
          NOGILIB
        </Typography>
        <Typography
          variant="body1"
          color="variant1"
          css={css`
            margin-top: 0.5em;
            text-align: center;
          `}
        >
          (Nogizaka Lib)
        </Typography>
        <Typography
          variant="h3"
          element="p"
          css={css`
            margin-top: 2em;
            text-align: center;
          `}
        >
          This project has been moved to
          <AnchorBase href="https://shawnrivers.github.io/nogilib/discography">
            here
          </AnchorBase>
        </Typography>
      </div>
    </Layout>
  );
};
