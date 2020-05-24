/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { contactsData } from '../../../data/contacts';
import { SP_EDGE } from '../../../libs/media';
import { useTheme } from '../../../theming/themes';
import { Layout } from '../../atoms/Layout';
import { Typography } from '../../atoms/Typography';
import { LinkBase } from '../../atoms/buttons/LinkBase';

export const ContactSection: React.FC<React.HTMLAttributes<
  HTMLElement
>> = props => {
  const theme = useTheme();

  return (
    <Layout element="section" backgroundColor="variant0" {...props}>
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
          #Contact
        </Typography>
        <ul
          css={css`
            display: flex;
            flex-direction: row;
            align-items: center;

            @media (max-width: ${SP_EDGE}) {
              flex-direction: column;
            }
          `}
        >
          {contactsData.map(contactData => (
            <li key={contactData.name}>
              <LinkBase href={contactData.url} backgroundHoverColor="standard">
                <Typography variant="body2" color="standard">
                  {contactData.name}
                </Typography>
              </LinkBase>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};
