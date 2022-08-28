import classNames from 'classnames';
import React from 'react';

import { flexOrGridBoxSystemProps } from '../../../../constants/systemProps';
import {
  classNamesWithMediaQueries,
  flexOrGridBoxClassName,
  omitSystemProps,
  systemClassName,
  typographyClassName
} from '../../../../helpers/systemPropsHelper';
import {
  DefaultAllowedHTMLElementType,
  FlexOrGridBoxSystemProps,
  PolymorphicProps,
  SystemProps,
  TypeWithMediaQueriesType,
  TypographySystemProps
} from '../../../../types';

export type GridProps<C extends DefaultAllowedHTMLElementType = 'div'> = {
  /**
   * Defines size columns (including breakpoints modifiers)
   */
  gridSize?: number | TypeWithMediaQueriesType<number>;
  children?: React.ReactNode;
} & PolymorphicProps<C> &
  SystemProps &
  TypographySystemProps &
  FlexOrGridBoxSystemProps;

export const Grid = <C extends DefaultAllowedHTMLElementType = 'div'>({
  gridSize = 12,
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
        propValue: gridSize,
        className: 'grid-size',
        withSuffixPropValue: true
      }),
      flexOrGridBoxClassName({
        alignItems,
        justifyContent,
        ...nativeProps
      }),
      systemClassName(nativeProps),
      typographyClassName(nativeProps)
    ),
    children
  });
