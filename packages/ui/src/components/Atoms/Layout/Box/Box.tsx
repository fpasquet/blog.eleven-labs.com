import * as React from 'react';

import {
  omitSystemProps,
  systemClassName
} from '../../../../helpers/systemPropsHelper';
import { SystemProps } from '../../../../types';

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
  | 'nav'
  | 'ol'
  | 'pre'
  | 'section'
  | 'span'
  | 'summary'
  | 'template'
  | 'ul'
>;

export interface BoxProps extends SystemProps<BoxHTMLElementType> {
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({
  as = 'div',
  children,
  ...nativeProps
}) =>
  React.createElement(as, {
    ...omitSystemProps(nativeProps),
    className: systemClassName(nativeProps),
    children
  });
