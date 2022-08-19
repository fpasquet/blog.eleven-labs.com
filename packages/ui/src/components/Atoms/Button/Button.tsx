import './Button.scss';

import classNames from 'classnames';
import * as React from 'react';

import {
  omitSystemProps,
  systemClassName
} from '../../../helpers/systemPropsHelper';
import { SpacingSystemProps } from '../../../types/SystemProps';

type ButtonHTMLElementType = Pick<JSX.IntrinsicElements, 'button' | 'a'>;

export interface ButtonProps
  extends SpacingSystemProps,
    React.HTMLAttributes<ButtonHTMLElementType> {
  variant?: 'primary' | 'primary-ghost' | 'form';
  /**
   * Generate component with a specific HTML tag (default: button)
   */
  as?: keyof ButtonHTMLElementType;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  as = 'button',
  variant,
  children,
  ...nativeProps
}) =>
  React.createElement(as, {
    ...omitSystemProps(nativeProps),
    className: systemClassName<SpacingSystemProps>({
      className: classNames('button', { [`button--${variant}`]: variant }),
      ...nativeProps
    }),
    children
  });
