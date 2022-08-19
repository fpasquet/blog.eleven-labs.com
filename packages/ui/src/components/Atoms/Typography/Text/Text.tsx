import classNames from 'classnames';
import React from 'react';

import {
  omitSystemProps,
  systemClassName,
  typographyClassName
} from '../../../../helpers/systemPropsHelper';
import { SystemProps, TypographySystemProps } from '../../../../types';

type TextHTMLElementType = keyof Pick<
  JSX.IntrinsicElements,
  'span' | 'p' | 'div'
>;

export interface TextProps
  extends SystemProps<TextHTMLElementType>,
    TypographySystemProps {
  children?: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  as = 'p',
  children,
  ...nativeProps
}) =>
  React.createElement(as, {
    ...omitSystemProps(nativeProps),
    className: classNames(
      systemClassName(nativeProps),
      typographyClassName(nativeProps)
    ),
    children
  });
