import { LayoutTemplateProps } from '@eleven-labs/blog-ui';
import React from 'react';
import { UseHeaderProps, useHeaderProps } from './useHeaderProps';
import { useFooterProps } from './useFooterProps';

export interface UseTemplateProps extends UseHeaderProps {}

export const useLayoutTemplateProps = (options: UseTemplateProps): Pick<
  LayoutTemplateProps,
  'headerProps' | 'footerProps'
> => {
  const headerProps = useHeaderProps({ search: options?.search });
  const footerProps = useFooterProps();

  return {
    headerProps,
    footerProps,
  };
};
