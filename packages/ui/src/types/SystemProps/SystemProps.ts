import { ComponentProps } from 'react';

import { DefaultHTMLElementType } from '../DefaultHTMLElementType';
import { ColorSystemProps } from './ColorSystemProps';
import { SpacingSystemProps } from './SpacingSystemProps';

export interface SystemPropsWithoutComponentProps<HTMLElementType>
  extends ColorSystemProps,
    SpacingSystemProps {
  /**
   * Generate component with a specific HTML tag (default: div)
   */
  as?: HTMLElementType;
}

export type SystemProps<
  HTMLElementType extends keyof JSX.IntrinsicElements = keyof DefaultHTMLElementType
> = SystemPropsWithoutComponentProps<HTMLElementType> &
  Omit<ComponentProps<HTMLElementType>, 'color'>;
