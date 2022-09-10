import classNames from 'classnames';
import React from 'react';

import {
  omitSystemProps,
  systemClassName,
  typographyClassName
} from '../../../../helpers/systemPropsHelper';
import { TypographyProps } from '../TypographyProps';

export type HeadingHTMLElementType = keyof Pick<
  JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'div'
>;

export type HeadingProps<C extends HeadingHTMLElementType = 'h1'> =
  TypographyProps<C>;

export const Heading = <C extends HeadingHTMLElementType = 'h1'>({
  as,
  children,
  ...nativeProps
}: HeadingProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(as || 'h1', {
    ...omitSystemProps(nativeProps),
    className: classNames(
      systemClassName(nativeProps),
      typographyClassName(nativeProps)
    ),
    children
  });
