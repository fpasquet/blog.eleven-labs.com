import { createControls } from '../../helpers/storybookHelper';
import { alignSelfList } from '../cssProperties/flexboxAndGridBox';
import { flexOrGridItemSystemProps } from '../systemProps';

export const flexOrGridItemPropsControls = createControls({
  category: 'Flex or Grid Item',
  props: flexOrGridItemSystemProps,
  options: {
    align: alignSelfList
  }
});
