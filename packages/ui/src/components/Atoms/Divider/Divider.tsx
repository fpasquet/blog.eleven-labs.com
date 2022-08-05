import './Divider.scss';

import React from 'react';

import {
  omitSystemProps,
  systemClassName
} from '../../../helpers/systemPropsHelper';
import { ColorSystemProps, SpacingSystemProps } from '../../../types';

export interface DividerProps
  extends Pick<ColorSystemProps, 'bg'>,
    SpacingSystemProps {}

export const Divider: React.FC<DividerProps> = ({
  bg = 'grey-light',
  ...nativeProps
}) =>
  React.createElement('hr', {
    ...omitSystemProps(nativeProps),
    className: systemClassName({ className: 'divider', bg, ...nativeProps })
  });
