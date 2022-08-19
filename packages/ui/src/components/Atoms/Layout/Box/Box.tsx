import classNames from 'classnames';
import * as React from 'react';

import {
  omitSystemProps,
  systemClassName,
  typographyClassName
} from '../../../../helpers/systemPropsHelper';
import { SystemProps, TypographySystemProps } from '../../../../types';

type BoxHTMLElementType = keyof Pick<
  JSX.IntrinsicElements,
  | 'address'
  | 'article'
  | 'aside'
  | 'blockquote'
  | 'canvas'
  | 'caption'
  | 'cite'
  | 'code'
  | 'details'
  | 'dialog'
  | 'div'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'form'
  | 'header'
  | 'li'
  | 'main'
  | 'nav'
  | 'ol'
  | 'pre'
  | 'section'
  | 'span'
  | 'summary'
  | 'template'
  | 'ul'
>;

export interface BoxProps
  extends SystemProps<BoxHTMLElementType>,
    TypographySystemProps {
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({
  as = 'div',
  children,
  ...nativeProps
}) =>
  React.createElement(as, {
    ...omitSystemProps(nativeProps),
    className: classNames(
      systemClassName(nativeProps),
      typographyClassName(nativeProps)
    ),
    children
  });
