import './ProgressBar.scss';

import React from 'react';

import {
  omitSystemProps,
  systemClassName
} from '../../../helpers/systemPropsHelper';
import { SpacingSystemProps } from '../../../types';

export interface ProgressBarProps
  extends SpacingSystemProps,
    React.ProgressHTMLAttributes<HTMLProgressElement> {}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  ...nativeProps
}) => (
  <div
    className={systemClassName<SpacingSystemProps>({
      className: 'progress-bar',
      ...nativeProps
    })}
  >
    <progress value={value} max={max} {...omitSystemProps(nativeProps)}>
      {value}%
    </progress>
  </div>
);
