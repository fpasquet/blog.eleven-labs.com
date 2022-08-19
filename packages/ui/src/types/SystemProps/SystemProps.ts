import { ComponentProps } from 'react';

import { DefaultHTMLElementType } from '../DefaultHTMLElementType';
import { ColorSystemProps } from './ColorSystemProps';
import { SpacingSystemProps } from './SpacingSystemProps';
import { TypographySystemProps } from './TypographySystemProps';

export interface SystemPropsWithoutComponentProps<
  HTMLElementType,
  TSize = unknown
> extends ColorSystemProps,
    SpacingSystemProps,
    TypographySystemProps<TSize> {
  /**
   * Generate component with a specific HTML tag (default: div)
   */
  as?: HTMLElementType;
}

export type SystemProps<
  HTMLElementType extends keyof JSX.IntrinsicElements = keyof DefaultHTMLElementType,
  TSize = unknown
> = SystemPropsWithoutComponentProps<HTMLElementType, TSize> &
  Omit<ComponentProps<HTMLElementType>, 'color'>;
