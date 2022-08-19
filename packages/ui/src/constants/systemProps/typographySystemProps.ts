import { TypographySystemProps } from '../../types/SystemProps';

export const typographySystemProps: Record<
  keyof TypographySystemProps,
  string[]
> = {
  size: ['font-size'],
  textAlign: ['text-align'],
  weight: ['font-weight'],
  italic: ['font-style'],
  textDecoration: ['text-decoration'],
  textTransform: ['text-transform']
};
