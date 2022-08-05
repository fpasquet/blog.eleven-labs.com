export const alignSelfList = [
  'auto',
  'start',
  'end',
  'center',
  'stretch',
  'baseline'
] as const;
export type AlignSelfType = typeof alignSelfList[number];
