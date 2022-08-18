import './ChoiceChip.scss';

import classNames from 'classnames';
import * as React from 'react';

import {
  omitSystemProps,
  systemClassName
} from '../../../helpers/systemPropsHelper';
import { SpacingSystemProps } from '../../../types/SystemProps';

type ChoiceChipHTMLElementType = Pick<JSX.IntrinsicElements, 'button' | 'a'>;

export interface ChoiceChipProps
  extends SpacingSystemProps,
    React.HTMLAttributes<ChoiceChipHTMLElementType> {
  /**
   * Generate component with a specific HTML tag (default: button)
   */
  as?: keyof ChoiceChipHTMLElementType;
  isActive?: boolean;
  children: React.ReactNode;
}

export const ChoiceChip: React.FC<ChoiceChipProps> = ({
  as = 'button',
  isActive = false,
  children,
  ...nativeProps
}) =>
  React.createElement(as, {
    ...omitSystemProps(nativeProps),
    className: systemClassName<SpacingSystemProps>({
      className: classNames('choice-chip', {
        'choice-chip--is-active': isActive
      }),
      ...nativeProps
    }),
    children
  });
