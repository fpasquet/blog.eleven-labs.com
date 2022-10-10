import { MediaQueriesType } from '../MediaQueriesType';

export interface HiddenSystemProps {
  /**
   * Defines hidden strategy with media queries (down) (including breakpoints modifiers)
   */
  hiddenDown?: MediaQueriesType;
  /**
   * Defines hidden strategy with media queries (up) (including breakpoints modifiers)
   */
  hiddenUp?: MediaQueriesType;
}
