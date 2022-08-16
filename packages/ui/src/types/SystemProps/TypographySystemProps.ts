import {
  FontWeightType,
  TextAlignType,
  TextDecorationType,
  TextTransformType
} from '../../constants';
import { TypeWithMediaQueriesType } from '../TypeWithMediaQueriesType';

export interface TypographySystemProps<TSize> {
  /**
   * enum of font-size (including breakpoints modifiers)
   */
  size?: TSize | TypeWithMediaQueriesType<TSize>;
  /**
   * text-align (including breakpoints modifiers)
   */
  textAlign?: TextAlignType | TypeWithMediaQueriesType<TextAlignType>;
  /**
   * font-weight (including breakpoints modifiers)
   */
  weight?: FontWeightType | TypeWithMediaQueriesType<FontWeightType>;
  /**
   * font-style (including breakpoints modifiers)
   */
  italic?: boolean | TypeWithMediaQueriesType<boolean>;
  /**
   * text-transform (including breakpoints modifiers)
   */
  textTransform?:
    | TextTransformType
    | TypeWithMediaQueriesType<TextTransformType>;
  /**
   * text-decoration (including breakpoints modifiers)
   */
  textDecoration?:
    | TextDecorationType
    | TypeWithMediaQueriesType<TextDecorationType>;
}
