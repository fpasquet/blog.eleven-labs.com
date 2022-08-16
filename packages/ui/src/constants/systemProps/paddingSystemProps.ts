import { PaddingSystemProps } from '../../types/SystemProps';

export const paddingSystemProps: Record<keyof PaddingSystemProps, string[]> = {
  p: ['padding'],
  pt: ['padding-top'],
  pr: ['padding-right'],
  pl: ['padding-left'],
  pb: ['padding-bottom'],
  px: ['padding-left', 'padding-right'],
  py: ['padding-top', 'padding-bottom']
};
