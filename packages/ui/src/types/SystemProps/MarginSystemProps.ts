import { SpacingType } from '../designTokens';
import { TypeWithMediaQueriesType } from '../TypeWithMediaQueriesType';

export interface MarginSystemProps {
  /**
   * margin (including breakpoints modifiers)
   */
  m?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * margin-top (including breakpoints modifiers)
   */
  mt?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * margin-right (including breakpoints modifiers)
   */
  mr?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * margin-bottom (including breakpoints modifiers)
   */
  mb?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * margin-left (including breakpoints modifiers)
   */
  ml?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * horizontal margin: margin-left and margin-right (including breakpoints modifiers)
   */
  mx?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
  /**
   * vertical margin: margin-top and margin-bottom (including breakpoints modifiers)
   */
  my?: SpacingType | TypeWithMediaQueriesType<SpacingType>;
}
