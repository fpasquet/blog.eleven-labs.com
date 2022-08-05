export const textTransformList = [
  'capitalize',
  'uppercase',
  'lowercase'
] as const;
export type TextTransformType = typeof textTransformList[number];
