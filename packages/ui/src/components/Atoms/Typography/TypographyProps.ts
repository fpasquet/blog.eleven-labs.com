import React from 'react';

import {
  PolymorphicProps,
  SystemProps,
  TypographySystemProps
} from '../../../types/SystemProps';

export type TypographyProps<C extends React.ElementType> = {
  children?: React.ReactNode;
} & PolymorphicProps<C> &
  SystemProps &
  TypographySystemProps;
