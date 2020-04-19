import * as React from 'react';
import { SvgIconProps } from './types';

export const ArrowIcon: React.FC<SvgIconProps> = props => {
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
      <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.69997C12.32 4.30997 11.69 4.30997 11.3 4.69997C10.91 5.08997 10.91 5.71997 11.3 6.10997L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" />
    </svg>
  );
};
