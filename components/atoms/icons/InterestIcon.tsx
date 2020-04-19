import * as React from 'react';
import { SvgIconProps } from './types';

export const InterestIcon: React.FC<SvgIconProps> = props => {
  const { title, fill = 'currentColor', ...restProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      {...restProps}
    >
      <title>{title}</title>
      <path d="M13.35 20.13C12.59 20.82 11.42 20.82 10.66 20.12L10.55 20.02C5.29997 15.27 1.86997 12.16 1.99997 8.28004C2.05997 6.58004 2.92997 4.95004 4.33997 3.99004C6.97997 2.19004 10.24 3.03004 12 5.09004C13.76 3.03004 17.02 2.18004 19.66 3.99004C21.07 4.95004 21.94 6.58004 22 8.28004C22.14 12.16 18.7 15.27 13.45 20.04L13.35 20.13Z" />
    </svg>
  );
};
