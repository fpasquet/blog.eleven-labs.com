import React from 'react';

import { DefaultHTMLElementType } from '../DefaultHTMLElementType';
import { ColorSystemProps } from './ColorSystemProps';
import { SpacingSystemProps } from './SpacingSystemProps';
import { TypographySystemProps } from './TypographySystemProps';

export interface SystemProps<
  HTMLElementType = DefaultHTMLElementType,
  TSize = unknown
> extends ColorSystemProps,
    SpacingSystemProps,
    TypographySystemProps<TSize>,
    Omit<React.HTMLAttributes<HTMLElementType>, 'color'> {
  /**
   * Generate component with a specific HTML tag (default: div)
   */
  as?: keyof HTMLElementType;
}
