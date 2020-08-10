/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { Typography } from '../atoms/Typography';
import { AnchorBase } from '../atoms/buttons/AnchorBase';

export const OldNogilib: React.FC = () => {
  return (
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
          margin-bottom: 1em;
          text-align: center;
        `}
      >
        NOGILIB
      </Typography>
      <Typography
        variant="h3"
        element="p"
        css={css`
          margin-bottom: 1em;
          text-align: center;
        `}
      >
        NOGILIB (old name: Nogizaka Lib) has been moved to
        <AnchorBase href="https://shawnrivers.github.io/nogilib/discography">
          here
        </AnchorBase>
      </Typography>
    </div>
  );
};
