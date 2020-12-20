/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import LazyLoad from 'react-lazyload';

type CircleImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const CircleImage: React.FC<CircleImageProps> = props => {
  const { src, srcSet, alt, width, ...restProps } = props;

  return (
    <LazyLoad height={width} offset={100}>
      <img
        src={src}
        srcSet={srcSet}
        alt={alt}
        width={width}
        height={width}
        css={css`
          border-radius: 50%;
        `}
        {...restProps}
      />
    </LazyLoad>
  );
};
