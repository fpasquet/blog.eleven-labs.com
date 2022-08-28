import { createControls } from '../../helpers/storybookHelper';
import { typographyFontSizeNameList } from '../../types';
import {
  fontWeightList,
  textAlignList,
  textDecorationList,
  textTransformList
} from '../cssProperties';
import { typographySystemProps } from '../systemProps';

export const typographyPropsControls = createControls({
  category: 'Typography',
  props: typographySystemProps,
  options: {
    size: typographyFontSizeNameList,
    textAlign: textAlignList,
    weight: fontWeightList,
    textDecoration: textDecorationList,
    textTransform: textTransformList
  },
  type: {
    italic: 'boolean'
  }
});
