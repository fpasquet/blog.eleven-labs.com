export const flexDirectionList = [
  'column',
  'row',
  'column-reverse',
  'row-reverse'
] as const;
export type FlexDirectionType = typeof flexDirectionList[number];
