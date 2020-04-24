/**@jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { BioSection } from '../organisms/BioSection';
import { IntroSection } from '../organisms/IntroSection';

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <IntroSection />
      <BioSection />
    </React.Fragment>
  );
};
