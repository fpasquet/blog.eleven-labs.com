import './Divider.scss';

import classNames from 'classnames';
import React from 'react';

import {
  omitSystemProps,
  systemClassName
} from '../../../helpers/systemPropsHelper';
import { HiddenSystemProps, SpacingSystemProps } from '../../../types';

export interface DividerProps
  extends SpacingSystemProps,
    HiddenSystemProps,
    React.HTMLAttributes<HTMLHRElement> {
  variant?: 'primary' | 'secondary' | 'neutral' | 'search';
}

export const Divider: React.FC<DividerProps> = ({ variant, ...nativeProps }) =>
  React.createElement('hr', {
    ...omitSystemProps(nativeProps),
    className: systemClassName<SpacingSystemProps>({
      className: classNames('divider', { [`divider--${variant}`]: variant }),
      ...nativeProps
    })
  });
