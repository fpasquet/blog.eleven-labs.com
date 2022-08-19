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
  FlexOrGridBoxSystemProps,
  SystemProps,
  TypeWithMediaQueriesType
} from '../../../../types';

export interface GridProps extends SystemProps, FlexOrGridBoxSystemProps {
  /**
   * Defines size columns (including breakpoints modifiers)
   */
  size?: number | TypeWithMediaQueriesType<number>;
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({
  size = 12,
  alignItems,
  justifyContent,
  children,
  as = 'div',
  ...nativeProps
}) =>
  React.createElement(as, {
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
