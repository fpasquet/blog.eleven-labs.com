export const gridJustifySelfList = [
  'auto',
  'start',
  'end',
  'center',
  'stretch'
] as const;
export type GridJustifySelfType = typeof gridJustifySelfList[number];
