import classNames from 'classnames';
import React from 'react';

import { flexOrGridBoxSystemProps } from '../../../../constants/systemProps';
import {
  classNamesWithMediaQueries,
  flexOrGridBoxClassName,
  omitSystemProps,
  systemClassName
} from '../../../../helpers/systemPropsHelper';
import {
  DefaultAllowedHTMLElementType,
  FlexOrGridBoxSystemProps,
  PolymorphicProps,
  SystemProps,
  TypeWithMediaQueriesType
} from '../../../../types';

export type GridProps<C extends DefaultAllowedHTMLElementType = 'div'> = {
  /**
   * Defines size columns (including breakpoints modifiers)
   */
  size?: number | TypeWithMediaQueriesType<number>;
  children?: React.ReactNode;
} & PolymorphicProps<C> &
  SystemProps &
  FlexOrGridBoxSystemProps;

export const Grid = <C extends DefaultAllowedHTMLElementType = 'div'>({
  size = 12,
  alignItems,
  justifyContent,
  children,
  as,
  ...nativeProps
}: GridProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(as || 'div', {
    ...omitSystemProps(nativeProps, Object.keys(flexOrGridBoxSystemProps)),
    className: classNames(
      'grid',
      ...classNamesWithMediaQueries<number>({
        propValue: size,
        className: 'grid-size',
        withSuffixPropValue: true
      }),
      flexOrGridBoxClassName({
        alignItems,
        justifyContent,
        ...nativeProps
      }),
      systemClassName(nativeProps)
    ),
    children
  });
