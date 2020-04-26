/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import { useTheme } from '../../../theming/themes';
import { Layout } from '../../atoms/Layout';
import { Link } from '../../atoms/Link';
import { Typography } from '../../atoms/Typography';
import { SP_EDGE } from '../../../libs/media';
import { contactsData } from '../../../data/contacts';

export const ContactSection: React.FC = () => {
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
          variant="h3"
          color="standard"
          css={css`
            text-align: center;
            margin-bottom: ${theme.spacing.m}px;
          `}
        >
          Contacts
        </Typography>
        <ul
          css={css`
            display: flex;
            flex-direction: row;
            align-items: center;

            @media (max-width: ${SP_EDGE}px) {
              flex-direction: column;
            }
          `}
        >
          {contactsData.map(contactData => (
            <li
              key={contactData.name}
              css={css`
                color: ${theme.colors.theme.primary.standard};
                margin: ${theme.spacing.xxs}px ${theme.spacing.s}px;
              `}
            >
              <Link href={contactData.url} typography="body2">
                {contactData.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
