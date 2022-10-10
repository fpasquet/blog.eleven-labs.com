import classNames from 'classnames';
import * as React from 'react';

import {
  omitSystemProps,
  systemClassName,
  typographyClassName
} from '../../../../helpers/systemPropsHelper';
import {
  DefaultAllowedHTMLElementType,
  PolymorphicProps,
  SystemProps,
  TypographySystemProps
} from '../../../../types';

type BoxElementType =
  | DefaultAllowedHTMLElementType
  | React.ForwardRefExoticComponent<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export type BoxProps<C extends BoxElementType = BoxElementType> = {
  children?: React.ReactNode;
} & PolymorphicProps<C> &
  SystemProps &
  TypographySystemProps;

export const Box = <C extends BoxElementType = 'div'>({
  as,
  children,
  ...nativeProps
}: BoxProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(as || 'div', {
    ...omitSystemProps(nativeProps),
    className: classNames(
      systemClassName(nativeProps),
      typographyClassName(nativeProps)
    ),
    children
  });
