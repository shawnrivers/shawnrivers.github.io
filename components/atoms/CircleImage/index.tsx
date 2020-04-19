/**@jsx jsx */
import { jsx, css } from '@emotion/core';
import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { useTheme } from '../../../theming/themes';

type CircleImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const CircleImage: React.FC<CircleImageProps> = props => {
  const { src, srcSet, alt, ...restProps } = props;
  const theme = useTheme();

  return (
    <LazyLoad height={128} offset={100}>
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        css={css`
          background-color: ${theme.colors.global.white};
          border: 4px solid ${theme.colors.theme.primary.standard};
          border-radius: 50%;
          width: 128px;
          height: 128px;
        `}
        {...restProps}
      />
    </LazyLoad>
  );
};
