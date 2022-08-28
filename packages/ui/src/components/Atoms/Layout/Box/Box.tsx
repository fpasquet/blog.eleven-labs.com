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

export type BoxProps<C extends DefaultAllowedHTMLElementType = 'div'> = {
  children?: React.ReactNode;
} & PolymorphicProps<C> &
  SystemProps &
  TypographySystemProps;

export const Box = <C extends DefaultAllowedHTMLElementType = 'div'>({
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
