import { AlignSelfType } from '../../constants';
import { TypeWithMediaQueriesType } from '../TypeWithMediaQueriesType';

export interface FlexOrGridBoxItemSystemProps {
  /**
   * Defines a align self (including breakpoints modifiers)
   */
  align?: AlignSelfType | TypeWithMediaQueriesType<AlignSelfType>;
}
