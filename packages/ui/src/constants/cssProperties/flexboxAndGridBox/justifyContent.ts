export const justifyContentList = [
  'start',
  'end',
  'center',
  'between',
  'around',
  'evenly',
  'stretch'
] as const;
export type JustifyContentType = typeof justifyContentList[number];
