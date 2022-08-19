import classNames from 'classnames';
import * as React from 'react';

import {
  omitSystemProps,
  systemClassName,
  typographyClassName
} from '../../../helpers/systemPropsHelper';
import { SystemProps, TypographySystemProps } from '../../../types/SystemProps';

type LinkHTMLElementType = keyof Pick<JSX.IntrinsicElements, 'a' | 'button'>;

export interface LinkProps
  extends SystemProps<LinkHTMLElementType>,
    TypographySystemProps {
  children?: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  as = 'a',
  children,
  ...nativeProps
}) =>
  React.createElement(as, {
    ...omitSystemProps(nativeProps),
    className: classNames(
      systemClassName({ color: 'amaranth', ...nativeProps }),
      typographyClassName(nativeProps)
    ),
    children
  });
