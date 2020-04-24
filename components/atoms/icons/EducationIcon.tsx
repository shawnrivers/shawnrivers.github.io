import * as React from 'react';
import { SvgIconComponent } from './types';

export const EducationIcon: SvgIconComponent = props => {
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
      <path d="M5.00003 13.18V15.99C5.00003 16.72 5.40003 17.4 6.04003 17.75L11.04 20.48C11.64 20.81 12.36 20.81 12.96 20.48L17.96 17.75C18.6 17.4 19 16.72 19 15.99V13.18L12.96 16.48C12.36 16.81 11.64 16.81 11.04 16.48L5.00003 13.18ZM11.04 3.52003L2.61003 8.12003C1.92003 8.50003 1.92003 9.50003 2.61003 9.88003L11.04 14.48C11.64 14.81 12.36 14.81 12.96 14.48L21 10.09V16C21 16.55 21.45 17 22 17C22.55 17 23 16.55 23 16V9.59003C23 9.22003 22.8 8.89003 22.48 8.71003L12.96 3.52003C12.36 3.20003 11.64 3.20003 11.04 3.52003Z" />
    </svg>
  );
};
