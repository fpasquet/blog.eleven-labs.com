import React from 'react';

import { DefaultHTMLElementType } from '../DefaultHTMLElementType';
import { ColorSystemProps } from './ColorSystemProps';
import { SpacingSystemProps } from './SpacingSystemProps';

export interface SystemProps<HTMLElementType = DefaultHTMLElementType>
  extends ColorSystemProps,
    SpacingSystemProps,
    Omit<React.HTMLAttributes<HTMLElementType>, 'color'> {
  /**
   * Generate component with a specific HTML tag (default: div)
   */
  as?: keyof HTMLElementType;
}
