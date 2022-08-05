import classNames from 'classnames';
import React from 'react';

import { FlexBasisType } from '../../../../../constants';
import {
  classNamesWithMediaQueries,
  flexOrGridBoxItemClassName,
  omitSystemProps,
  systemClassName
} from '../../../../../helpers/systemPropsHelper';
import {
  FlexOrGridBoxItemSystemProps,
  SystemProps,
  TypeWithMediaQueriesType
} from '../../../../../types';

export interface FlexItemProps
  extends SystemProps,
    FlexOrGridBoxItemSystemProps {
  /**
   * Defines a flex basis, auto or number (including breakpoints modifiers)
   */
  basis?: FlexBasisType | TypeWithMediaQueriesType<FlexBasisType>;
  children: React.ReactNode;
}

export const FlexItem: React.FC<FlexItemProps> = ({
  basis,
  children,
  as = 'div',
  ...nativeProps
}) =>
  React.createElement(as, {
    ...omitSystemProps(nativeProps),
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
