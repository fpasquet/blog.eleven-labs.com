import classNames from 'classnames';

import {
  FontWeightType,
  TextAlignType
} from '../../constants/cssProperties/typography';
import { typographySystemProps } from '../../constants/systemProps';
import { TypographySystemProps } from '../../types/SystemProps';
import { classNamesWithMediaQueries } from './classNamesWithMediaQueries';
import { systemClassNames } from './systemClassNames';

export const typographyClassName = <TProps extends TypographySystemProps>({
  textAlign,
  weight,
  italic,
  ...props
}: TProps): string => {
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
