import classNames from 'classnames';
import React from 'react';

import {
  FlexBasisType,
  flexOrGridItemSystemProps
} from '../../../../../constants';
import {
  classNamesWithMediaQueries,
  flexOrGridBoxItemClassName,
  omitSystemProps,
  systemClassName
} from '../../../../../helpers/systemPropsHelper';
import {
  DefaultAllowedHTMLElementType,
  FlexOrGridBoxItemSystemProps,
  PolymorphicProps,
  SystemProps,
  TypeWithMediaQueriesType
} from '../../../../../types';

export type FlexItemProps<C extends DefaultAllowedHTMLElementType = 'div'> = {
  /**
   * Defines a flex basis, auto or number (including breakpoints modifiers)
   */
  basis?: FlexBasisType | TypeWithMediaQueriesType<FlexBasisType>;
  children?: React.ReactNode;
} & PolymorphicProps<C> &
  SystemProps &
  FlexOrGridBoxItemSystemProps;

export const FlexItem = <C extends DefaultAllowedHTMLElementType = 'div'>({
  basis,
  children,
  as,
  ...nativeProps
}: FlexItemProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(as || 'div', {
    ...omitSystemProps(nativeProps, Object.keys(flexOrGridItemSystemProps)),
    className: classNames(
      ...classNamesWithMediaQueries<FlexBasisType>({
        propValue: basis,
        className: 'basis',
        withSuffixPropValue: true
      }),
      flexOrGridBoxItemClassName(nativeProps),
      systemClassName(nativeProps)
    ),
    children
  });
