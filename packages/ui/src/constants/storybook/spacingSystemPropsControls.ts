import { ArgTypes } from '@storybook/csf';

import { createControls } from '../../helpers/storybookHelper';
import { spacingNameList, SpacingSystemProps } from '../../types';
import { marginSystemProps, paddingSystemProps } from '../systemProps';

export const marginSystemPropsControls = createControls({
  category: 'Spacing',
  props: marginSystemProps,
  options: spacingNameList
});
export const paddingSystemPropsControls = createControls({
  category: 'Spacing',
  props: paddingSystemProps,
  options: spacingNameList
});

export const spacingSystemPropsControls: Partial<ArgTypes<SpacingSystemProps>> =
  {
    ...marginSystemPropsControls,
    ...paddingSystemPropsControls
  };
