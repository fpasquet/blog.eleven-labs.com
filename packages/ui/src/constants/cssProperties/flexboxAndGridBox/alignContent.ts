export const alignContentList = [
  'start',
  'end',
  'center',
  'between',
  'around',
  'evenly',
  'stretch'
] as const;
export type AlignContentType = typeof alignContentList[number];
