import classNames from 'classnames';

import { FlexOrGridBoxItemSystemProps } from '../../types/SystemProps';
import { classNamesWithMediaQueries } from './classNamesWithMediaQueries';

export const flexOrGridBoxItemClassName = <
  TProps extends FlexOrGridBoxItemSystemProps & { className?: string }
>(
  props: TProps
): string => {
  return classNames(
    ...classNamesWithMediaQueries<string>({
      propValue: props.align,
      className: 'self',
      withSuffixPropValue: true
    })
  );
};
