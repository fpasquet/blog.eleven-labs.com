import './ChoiceChip.scss';

import classNames from 'classnames';
import * as React from 'react';

import {
  omitSystemProps,
  systemClassName
} from '../../../helpers/systemPropsHelper';
import {
  PolymorphicProps,
  SpacingSystemProps
} from '../../../types/SystemProps';

type ChoiceChipElementType =
  | keyof Pick<JSX.IntrinsicElements, 'a' | 'button'>
  | React.ForwardRefExoticComponent<any>; // eslint-disable-line @typescript-eslint/no-explicit-any

export type ChoiceChipProps<
  C extends ChoiceChipElementType = ChoiceChipElementType
> = {
  isActive?: boolean;
  children?: React.ReactNode;
} & PolymorphicProps<C> &
  SpacingSystemProps;

export const ChoiceChip = <C extends ChoiceChipElementType = 'button'>({
  as,
  isActive = false,
  children,
  ...nativeProps
}: ChoiceChipProps<C>): ReturnType<React.FC<C>> =>
  React.createElement(as || 'button', {
    ...omitSystemProps(nativeProps),
    className: systemClassName<SpacingSystemProps>({
      className: classNames('choice-chip', {
        'choice-chip--is-active': isActive
      }),
      ...nativeProps
    }),
    children
  });
