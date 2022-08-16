import classNames from 'classnames';

import { FlexOrGridBoxSystemProps } from '../../types/SystemProps';
import { classNamesWithMediaQueries } from './classNamesWithMediaQueries';

export const flexOrGridBoxClassName = <
  TProps extends FlexOrGridBoxSystemProps & { className?: string }
>(
  props: TProps
): string => {
  return classNames(
    ...classNamesWithMediaQueries<string>({
      propValue: props.alignItems,
      className: 'items',
      withSuffixPropValue: true
    }),
    ...classNamesWithMediaQueries<string>({
      propValue: props.alignContent,
      className: 'content',
      withSuffixPropValue: true
    }),
    ...classNamesWithMediaQueries<string>({
      propValue: props.justifyContent,
      className: 'justify',
      withSuffixPropValue: true
    }),
    ...classNamesWithMediaQueries<string>({
      propValue: props.gap,
      className: 'gap',
      withSuffixPropValue: true
    }),
    ...classNamesWithMediaQueries<string>({
      propValue: props.gapX,
      className: 'gap-x',
      withSuffixPropValue: true
    }),
    ...classNamesWithMediaQueries<string>({
      propValue: props.gapY,
      className: 'gap-y',
      withSuffixPropValue: true
    })
  );
};
