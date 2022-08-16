import classNames from 'classnames';
import React from 'react';

import { FlexDirectionType, FlexWrapType } from '../../../../constants';
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

export interface FlexProps extends SystemProps, FlexOrGridBoxSystemProps {
  /**
   * Defines a flex container, inline-flex or flex (including breakpoints modifiers)
   */
  inline?: boolean | TypeWithMediaQueriesType<boolean>;
  /**
   * flex-direction (including breakpoints modifiers)
   */
  direction?: FlexDirectionType | TypeWithMediaQueriesType<FlexDirectionType>;
  /**
   * Can flex items wrap onto multiple lines (including breakpoints modifiers)
   */
  wrap?: FlexWrapType | TypeWithMediaQueriesType<FlexWrapType>;
  children: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({
  inline = false,
  direction,
  alignItems,
  justifyContent,
  wrap,
  as = 'div',
  children,
  ...nativeProps
}) =>
  React.createElement(as, {
    ...omitSystemProps(nativeProps),
    className: classNames(
      ...classNamesWithMediaQueries<boolean>({
        propValue: inline,
        className: inline ? 'inline-flex' : 'flex'
      }),
      ...classNamesWithMediaQueries<FlexDirectionType>({
        propValue: direction,
        className: 'flex',
        withSuffixPropValue: true
      }),
      ...classNamesWithMediaQueries<FlexWrapType>({
        propValue: wrap,
        className: 'flex',
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
