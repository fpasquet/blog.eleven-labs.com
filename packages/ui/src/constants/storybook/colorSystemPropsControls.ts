import { createControls } from '../../helpers/storybookHelper';
import { colorNameList } from '../../types';
import { colorSystemProps } from '../systemProps';

export const colorSystemPropsControls = createControls({
  category: 'Color',
  props: colorSystemProps,
  options: colorNameList
});
