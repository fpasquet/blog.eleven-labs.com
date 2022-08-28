import classNames from 'classnames';
import React from 'react';

import { flexOrGridItemSystemProps } from '../../../../../constants';
import {
  flexOrGridBoxItemClassName,
  omitSystemProps,
  systemClassName
} from '../../../../../helpers/systemPropsHelper';
import {
  DefaultAllowedHTMLElementType,
  FlexOrGridBoxItemSystemProps,
  PolymorphicProps,
  SystemProps
} from '../../../../../types';

export type GridItemProps<C extends DefaultAllowedHTMLElementType = 'div'> = {
  children?: React.ReactNode;
} & PolymorphicProps<C> &
  SystemProps &
  FlexOrGridBoxItemSystemProps;

export const GridItem = <C extends DefaultAllowedHTMLElementType = 'div'>({
  children,
  as,
  ...nativeProps
}: GridItemProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(as || 'div', {
    ...omitSystemProps(nativeProps, Object.keys(flexOrGridItemSystemProps)),
    className: classNames(
      flexOrGridBoxItemClassName(nativeProps),
      systemClassName(nativeProps)
    ),
    children
  });
