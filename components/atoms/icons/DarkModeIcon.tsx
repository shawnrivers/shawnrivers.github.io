import * as React from 'react';
import { SvgIconProps } from './types';

export const DarkModeIcon: React.FC<SvgIconProps> = props => {
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
      <path d="M12.43 2.30001C10.05 1.71001 7.74998 2.03001 5.79998 2.94001C5.44998 3.10001 5.38998 3.58001 5.69998 3.80001C8.29998 5.60001 9.99998 8.60001 9.99998 12C9.99998 15.4 8.29998 18.4 5.69998 20.2C5.37998 20.42 5.43998 20.9 5.78998 21.06C7.06998 21.66 8.49998 22 9.99998 22C16.05 22 20.85 16.62 19.87 10.4C19.26 6.48001 16.28 3.24001 12.43 2.30001Z" />
    </svg>
  );
};
