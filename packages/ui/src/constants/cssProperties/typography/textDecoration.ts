export const textDecorationList = [
  'underline',
  'dotted',
  'wavy',
  'overline'
] as const;
export type TextDecorationType = typeof textDecorationList[number];
