import classNames from 'classnames';
import React from 'react';

import {
  omitSystemProps,
  systemClassName,
  typographySizeClassName
} from '../../../../helpers/systemPropsHelper';
import { SystemProps, TypographyTextType } from '../../../../types';

type TextHTMLElementType = keyof Pick<
  JSX.IntrinsicElements,
  'span' | 'p' | 'div'
>;

export interface TextProps
  extends SystemProps<TextHTMLElementType, TypographyTextType> {
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  as = 'p',
  size = 'm',
  children,
  ...nativeProps
}) =>
  React.createElement(as, {
    ...omitSystemProps(nativeProps),
    className: classNames(
      systemClassName(nativeProps),
      typographySizeClassName<TypographyTextType>({ size, ...nativeProps })
    ),
    children
  });
