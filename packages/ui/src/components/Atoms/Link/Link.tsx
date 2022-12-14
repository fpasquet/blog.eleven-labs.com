import './Link.scss';

import classNames from 'classnames';
import * as React from 'react';

import {
  omitSystemProps,
  systemClassName,
  typographyClassName
} from '../../../helpers/systemPropsHelper';
import {
  PolymorphicProps,
  SpacingSystemProps,
  TypographySystemProps
} from '../../../types';

type LinkElementType =
  | keyof Pick<JSX.IntrinsicElements, 'a' | 'button'>
  | React.ForwardRefExoticComponent<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export type LinkProps<C extends LinkElementType = LinkElementType> = {
  active?: boolean;
  children?: React.ReactNode;
} & PolymorphicProps<C> &
  SpacingSystemProps &
  TypographySystemProps;

export const Link = <C extends LinkElementType = 'a'>({
  as,
  active,
  children,
  ...nativeProps
}: LinkProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(
    as || 'a',
    {
      ...omitSystemProps(nativeProps),
      className: classNames(
        'link',
        { [`link--active`]: active },
        systemClassName<SpacingSystemProps>(nativeProps),
        typographyClassName(nativeProps)
      )
    },
    children
  );
