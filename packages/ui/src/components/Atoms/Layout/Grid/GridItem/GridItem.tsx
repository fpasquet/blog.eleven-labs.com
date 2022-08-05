import classNames from 'classnames';
import React from 'react';

import {
  flexOrGridBoxItemClassName,
  omitSystemProps,
  systemClassName
} from '../../../../../helpers/systemPropsHelper';
import {
  FlexOrGridBoxItemSystemProps,
  SystemProps
} from '../../../../../types';

export interface GridItemProps
  extends SystemProps,
    FlexOrGridBoxItemSystemProps {
  children: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  as = 'div',
  ...nativeProps
}) =>
  React.createElement(as, {
    ...omitSystemProps(nativeProps),
    className: classNames(
      flexOrGridBoxItemClassName(nativeProps),
      systemClassName(nativeProps)
    ),
    children
  });
