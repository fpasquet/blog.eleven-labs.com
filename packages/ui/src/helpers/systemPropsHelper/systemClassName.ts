import classNames from 'classnames';

import {
  colorSystemProps,
  marginSystemProps,
  paddingSystemProps
} from '../../constants/systemProps';
import { SystemProps } from '../../types/SystemProps';
import { systemClassNames } from './systemClassNames';
import { typographyClassName } from './typographyClassName';

export const systemClassName = <
  TProps extends SystemProps = SystemProps & { className?: string }
>(
  props: TProps
): string =>
  classNames(
    props.className,
    ...systemClassNames({ props, systemProps: colorSystemProps }),
    ...systemClassNames({
      props,
      systemProps: marginSystemProps,
      hasResponsiveProps: true
    }),
    ...systemClassNames({
      props,
      systemProps: paddingSystemProps,
      hasResponsiveProps: true
    }),
    typographyClassName(props, true)
  );
