import { ArgTypes } from '@storybook/csf';

import { SystemProps } from '../../types';
import { colorSystemPropsControls } from './colorSystemPropsControls';
import { spacingSystemPropsControls } from './spacingSystemPropsControls';

export const systemPropsControls: Partial<ArgTypes<SystemProps>> = {
  ...spacingSystemPropsControls,
  ...colorSystemPropsControls
};
