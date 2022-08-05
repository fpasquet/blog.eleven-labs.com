export const textAlignList = ['left', 'center', 'right', 'justify'] as const;
export type TextAlignType = typeof textAlignList[number];
