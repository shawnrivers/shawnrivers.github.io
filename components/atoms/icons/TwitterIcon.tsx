import * as React from 'react';
import { SvgIconProps } from './types';

export const TwitterIcon: React.FC<SvgIconProps> = props => {
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
      <path d="M8.2896 20C15.8368 20 19.9648 13.8438 19.9648 8.50515C19.9648 8.3303 19.9648 8.15623 19.9528 7.98295C20.7559 7.41105 21.4491 6.70293 22 5.89176C21.2511 6.21847 20.4567 6.43273 19.6432 6.52739C20.4998 6.02249 21.1409 5.22838 21.4472 4.29285C20.6417 4.76343 19.7605 5.09507 18.8416 5.27346C18.2229 4.62577 17.4047 4.19689 16.5135 4.05318C15.6223 3.90947 14.7079 4.05894 13.9116 4.47848C13.1154 4.89801 12.4819 5.56421 12.109 6.37398C11.7361 7.18376 11.6446 8.09196 11.8488 8.95805C10.2174 8.87753 8.62144 8.46013 7.16451 7.73294C5.70759 7.00576 4.42227 5.98505 3.392 4.73708C2.86727 5.62645 2.70656 6.67929 2.94258 7.68123C3.17861 8.68317 3.79362 9.55888 4.6624 10.1301C4.00939 10.111 3.37062 9.93757 2.8 9.62439C2.8 9.64093 2.8 9.65826 2.8 9.67559C2.80026 10.6083 3.12821 11.5123 3.72823 12.2341C4.32824 12.9559 5.16338 13.4512 6.092 13.6359C5.4879 13.7981 4.85406 13.8218 4.2392 13.7052C4.50141 14.5079 5.01189 15.2099 5.69926 15.7129C6.38662 16.216 7.21649 16.4949 8.0728 16.5107C6.61979 17.6351 4.82485 18.2454 2.9768 18.2436C2.65032 18.2429 2.32416 18.2235 2 18.1853C3.87651 19.3709 6.05993 19.9998 8.2896 19.9968" />
    </svg>
  );
};
