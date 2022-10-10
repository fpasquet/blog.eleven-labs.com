import classNames from 'classnames';

import {
  colorSystemProps,
  hiddenSystemProps,
  marginSystemProps,
  paddingSystemProps
} from '../../constants/systemProps';
import { SystemProps } from '../../types/SystemProps';
import { systemClassNames } from './systemClassNames';

export const systemClassName = <TProps extends SystemProps = SystemProps>(
  props: TProps & { className?: string }
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
    ...systemClassNames({
      props,
      systemProps: hiddenSystemProps,
      valueIsResponsiveProps: true
    })
  );
