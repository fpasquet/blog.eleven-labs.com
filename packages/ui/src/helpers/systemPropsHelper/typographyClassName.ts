import classNames from 'classnames';

import {
  FontWeightType,
  TextAlignType
} from '../../constants/cssProperties/typography';
import { typographySystemProps } from '../../constants/systemProps';
import { TypographySystemProps } from '../../types/SystemProps';
import { classNamesWithMediaQueries } from './classNamesWithMediaQueries';
import { systemClassNames } from './systemClassNames';

export const typographyClassName = <
  TProps extends Omit<TypographySystemProps<unknown>, 'size'>
>(
  { textAlign, weight, italic, ...props }: TProps,
  isHeading?: boolean
): string => {
  return classNames(
    ...systemClassNames({
      props,
      systemProps: typographySystemProps,
      hasResponsiveProps: true
    }),
    ...classNamesWithMediaQueries<TextAlignType>({
      propValue: textAlign,
      className: 'text',
      withSuffixPropValue: true
    }),
    ...classNamesWithMediaQueries<boolean>({
      propValue: italic,
      className: 'text-italic'
    }),
    ...classNamesWithMediaQueries<FontWeightType>({
      propValue: weight,
      className: 'font-weight',
      withSuffixPropValue: true
    })
  );
};

export const typographySizeClassName = <TSize extends string>(
  { size }: Pick<TypographySystemProps<TSize>, 'size'>,
  isHeading?: boolean
): string => {
  return classNamesWithMediaQueries<TSize>({
    propValue: size,
    className: isHeading ? 'heading' : 'text',
    withSuffixPropValue: true
  }).join(' ');
};
