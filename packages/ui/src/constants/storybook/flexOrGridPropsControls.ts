import { createControls } from '../../helpers/storybookHelper';
import { spacingNameList } from '../../types';
import {
  alignContentList,
  alignItemsList,
  justifyContentList
} from '../cssProperties';
import { flexOrGridBoxSystemProps } from '../systemProps';

export const flexOrGridPropsControls = createControls({
  category: 'Flex or Grid Box',
  props: flexOrGridBoxSystemProps,
  options: {
    alignItems: alignItemsList,
    alignContent: alignContentList,
    justifyContent: justifyContentList,
    gap: spacingNameList,
    gapX: spacingNameList,
    gapY: spacingNameList
  }
});
