import classNames from 'classnames';
import React from 'react';

import {
  omitSystemProps,
  systemClassName,
  typographyClassName
} from '../../../../helpers/systemPropsHelper';
import { TypographyProps } from '../TypographyProps';

type TextHTMLElementType = keyof Pick<
  JSX.IntrinsicElements,
  'span' | 'p' | 'div'
>;

export type TextProps<C extends TextHTMLElementType = 'p'> = TypographyProps<C>;

export const Text = <C extends TextHTMLElementType = 'p'>({
  as,
  children,
  ...nativeProps
}: TextProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(as || 'p', {
    ...omitSystemProps(nativeProps),
    className: classNames(
      systemClassName(nativeProps),
      typographyClassName(nativeProps)
    ),
    children
  });
