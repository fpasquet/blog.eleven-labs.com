import { HiddenSystemProps } from '../../types/SystemProps';

export const hiddenSystemProps: Record<keyof HiddenSystemProps, string[]> = {
  hiddenDown: ['display'],
  hiddenUp: ['display']
};
