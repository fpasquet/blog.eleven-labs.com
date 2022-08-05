import classNames from 'classnames';
import React from 'react';

import {
  omitSystemProps,
  systemClassName,
  typographySizeClassName
} from '../../../../helpers/systemPropsHelper';
import { SystemProps, TypographyHeadingType } from '../../../../types';

type HeadingHTMLElementType = Pick<
  JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'div'
>;

export interface HeadingProps
  extends SystemProps<HeadingHTMLElementType, TypographyHeadingType> {
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  as = 'h1',
  children,
  size = 'l',
  ...nativeProps
}) =>
  React.createElement(as, {
    ...omitSystemProps(nativeProps),
    className: classNames(
      systemClassName(nativeProps),
      typographySizeClassName<TypographyHeadingType>(
        { size, ...nativeProps },
        true
      )
    ),
    children
  });
