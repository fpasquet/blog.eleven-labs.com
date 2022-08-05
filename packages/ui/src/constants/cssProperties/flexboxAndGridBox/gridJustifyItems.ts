export const gridJustifyItemsList = [
  'start',
  'end',
  'center',
  'stretch'
] as const;
export type GridJustifyItemsType = typeof gridJustifyItemsList[number];
