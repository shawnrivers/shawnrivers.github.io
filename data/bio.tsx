import * as React from 'react';
import { ListCardProps } from '../components/molecules/Card/ListCard';

type List = ListCardProps['listItems'];

export const locations: List = [
  { component: <>Fuzhou, China</> },
  { component: <>Shenyang, China</> },
  { component: <>Nagoya, Japan</> },
  { component: <>Tokyo, Japan</>, isActive: true },
];

export const education: List = [
  {
    component: (
      <>
        Northeastern University (China), <br />
        Digital Media
      </>
    ),
  },
  {
    component: (
      <>
        Nagoya University (Japan), <br />
        Society and Media Studies
      </>
    ),
  },
  {
    component: (
      <>
        University of Tokyo (Japan), <br />
        Computer Graphics
      </>
    ),
  },
];

export const jobs: List = [
  {
    component: (
      <>
        eureka, Inc.
        <br />
        Web Front-end Engineer (intern)
      </>
    ),
  },
  {
    component: (
      <>
        SHOWROOM Inc.
        <br />
        Web Front-end Engineer (intern)
      </>
    ),
  },
  {
    component: (
      <>
        eureka, Inc.
        <br />
        Web Front-end Engineer
      </>
    ),
    isActive: true,
  },
];

export const hobbies = 'Nogizaka46, web dev, UI design, covering, Karaoke';
