import classNames from 'classnames';
import React from 'react';

import { flexOrGridItemSystemProps } from '../../../../../constants/systemProps';
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
    ...omitSystemProps(nativeProps, Object.keys(flexOrGridItemSystemProps)),
    className: classNames(
      flexOrGridBoxItemClassName(nativeProps),
      systemClassName(nativeProps)
    ),
    children
  });
