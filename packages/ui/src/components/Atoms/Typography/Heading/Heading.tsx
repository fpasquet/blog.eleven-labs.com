import classNames from 'classnames';
import React from 'react';

import {
  omitSystemProps,
  systemClassName,
  typographyClassName
} from '../../../../helpers/systemPropsHelper';
import { SystemProps, TypographySystemProps } from '../../../../types';

type HeadingHTMLElementType = keyof Pick<
  JSX.IntrinsicElements,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'div'
>;

export interface HeadingProps
  extends SystemProps<HeadingHTMLElementType>,
    TypographySystemProps {
  children?: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  as = 'h1',
  weight = 'bold',
  children,
  ...nativeProps
}) =>
  React.createElement(as, {
    ...omitSystemProps(nativeProps),
    className: classNames(
      systemClassName(nativeProps),
      typographyClassName({ ...nativeProps, weight })
    ),
    children
  });
