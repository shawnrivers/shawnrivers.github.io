import { CircleIconProps } from '../components/atoms/CircleIcon';
import { TwitterIcon } from '../components/atoms/icons/TwitterIcon';
import nogizakalib1x from '../components/images/nogizakalib-1x.jpg';
import nogizakalib2x from '../components/images/nogizakalib-2x.jpg';
import nogizakalib3x from '../components/images/nogizakalib-3x.jpg';
import { LinkCardProps } from '../components/molecules/Card/LinkCard';

type LinkCardData = {
  url: string;
  heading: string;
  body: string;
  headingIcon: Omit<LinkCardProps['headingIcon'], 'size'>;
  badgeIcon?: Omit<CircleIconProps, 'size'>;
};

const nogizakaLib: LinkCardData = {
  url: 'https://shawnrivers.github.io/nogilib/discography',
  heading: 'NOGILIB',
  body:
    'A web application showing the information about Nogizaka46 in a user-friendly way',
  headingIcon: {
    src: nogizakalib1x,
    srcSet: `${nogizakalib1x} 1x, ${nogizakalib2x} 2x, ${nogizakalib3x} 3x`,
  },
};

const nogizakaNews: LinkCardData = {
  url: 'https://twitter.com/n46_news',
  heading: 'Nogizaka News',
  body:
    "A Twitter Bot for retweeting Nogizaka46 news and tweeting members' schedules",
  headingIcon: {
    src: nogizakalib1x,
    srcSet: `${nogizakalib1x} 1x, ${nogizakalib2x} 2x, ${nogizakalib3x} 3x`,
  },
  badgeIcon: {
    icon: TwitterIcon,
    color: 'white',
    backgroundColor: 'twitter',
  },
};

export const worksData: LinkCardData[] = [nogizakaLib, nogizakaNews];
