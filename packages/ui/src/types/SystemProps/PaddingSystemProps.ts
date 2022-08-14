import { SpacingType } from '../designTokens';
import { TypeWithMediaQueriesType } from '../TypeWithMediaQueriesType';

export interface PaddingSystemProps {
  /**
   * padding (including breakpoints modifiers)
   */
  p?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * padding-top (including breakpoints modifiers)
   */
  pt?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * padding-right (including breakpoints modifiers)
   */
  pr?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * padding-bottom (including breakpoints modifiers)
   */
  pb?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * padding-left (including breakpoints modifiers)
   */
  pl?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * horizontal padding: padding-left and padding-right (including breakpoints modifiers)
   */
  px?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * vertical padding: padding-top and padding-bottom (including breakpoints modifiers)
   */
  py?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
}
