import { MarginSystemProps } from '../../types/SystemProps';

export const marginSystemProps: Record<keyof MarginSystemProps, string[]> = {
  m: ['margin'],
  mt: ['margin-top'],
  mr: ['margin-right'],
  ml: ['margin-left'],
  mb: ['margin-bottom'],
  mx: ['margin-left', 'margin-right'],
  my: ['margin-top', 'margin-bottom']
};
