import classNames from 'classnames';
import React from 'react';

import {
  FlexDirectionType,
  flexOrGridBoxSystemProps,
  FlexWrapType
} from '../../../../constants';
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

export type FlexProps<C extends DefaultAllowedHTMLElementType = 'div'> = {
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
  children?: React.ReactNode;
} & PolymorphicProps<C> &
  SystemProps &
  FlexOrGridBoxSystemProps;

export const Flex = <C extends DefaultAllowedHTMLElementType = 'div'>({
  inline = false,
  direction,
  alignItems,
  justifyContent,
  wrap,
  as,
  children,
  ...nativeProps
}: FlexProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(
    as || 'div',
    {
      ...omitSystemProps(nativeProps, Object.keys(flexOrGridBoxSystemProps)),
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
      )
    },
    children
  );
