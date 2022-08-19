import * as React from 'react';

import {
  omitSystemProps,
  systemClassName
} from '../../../helpers/systemPropsHelper';
import { SystemProps } from '../../../types/SystemProps';

type LinkHTMLElementType = keyof Pick<JSX.IntrinsicElements, 'a' | 'button'>;

export interface LinkProps extends SystemProps<LinkHTMLElementType> {
  children?: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  as = 'a',
  children,
  ...nativeProps
}) =>
  React.createElement(as, {
    ...omitSystemProps(nativeProps),
    className: systemClassName({ color: 'amaranth', ...nativeProps }),
    children
  });
