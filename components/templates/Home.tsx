/**@jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { BioSection } from '../organisms/BioSection';
import { IntroSection } from '../organisms/IntroSection';
import { WorksSection } from '../organisms/WorksSection';
import { ContactSection } from '../organisms/ContactSection';

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <IntroSection />
      <BioSection />
      <WorksSection />
      <ContactSection />
    </React.Fragment>
  );
};
