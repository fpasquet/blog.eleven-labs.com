export const alignItemsList = [
  'start',
  'end',
  'center',
  'baseline',
  'stretch'
] as const;
export type AlignItemsType = typeof alignItemsList[number];
