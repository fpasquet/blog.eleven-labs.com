import { TypographySystemProps } from '../../types/SystemProps';

export const typographySystemProps: Record<
  keyof Omit<TypographySystemProps<unknown>, 'size'>,
  string[]
> = {
  textAlign: ['text-align'],
  weight: ['font-weight'],
  italic: ['font-style'],
  textDecoration: ['text-decoration'],
  textTransform: ['text-transform']
};
