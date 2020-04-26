import * as React from 'react';
import { EducationIcon } from '../components/atoms/icons/EducationIcon';
import { InterestIcon } from '../components/atoms/icons/InterestIcon';
import { JobIcon } from '../components/atoms/icons/JobIcon';
import { LocationIcon } from '../components/atoms/icons/LocationIcon';
import { ArticleCardProps } from '../components/molecules/Card/ArticleCard';
import { ListCardProps } from '../components/molecules/Card/ListCard';

type ListCardData = Pick<
  ListCardProps,
  'heading' | 'headingIcon' | 'listItems'
>;

type ArticleCardData = Pick<
  ArticleCardProps,
  'heading' | 'headingIcon' | 'body'
>;

type BioData = (
  | {
      type: 'list';
      data: ListCardData;
    }
  | {
      type: 'article';
      data: ArticleCardData;
    }
)[];

const locations: ListCardData = {
  heading: 'Locations',
  headingIcon: LocationIcon,
  listItems: [
    { component: <>Fuzhou, China</> },
    { component: <>Shenyang, China</> },
    { component: <>Nagoya, Japan</> },
    { component: <>Tokyo, Japan</>, isActive: true },
  ],
};

const education: ListCardData = {
  heading: 'Education',
  headingIcon: EducationIcon,
  listItems: [
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
  ],
};

const jobs: ListCardData = {
  heading: 'Jobs',
  headingIcon: JobIcon,
  listItems: [
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
  ],
};

const hobbies: ArticleCardData = {
  heading: 'Hobbies',
  headingIcon: InterestIcon,
  body: 'Nogizaka46, web dev, UI design, covering, Karaoke',
};

export const bioData: BioData = [
  {
    type: 'list',
    data: locations,
  },
  {
    type: 'list',
    data: education,
  },
  {
    type: 'list',
    data: jobs,
  },
  {
    type: 'article',
    data: hobbies,
  },
];
