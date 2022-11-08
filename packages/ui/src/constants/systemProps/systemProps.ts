import { colorSystemProps } from './colorSystemProps';
import { hiddenSystemProps } from './hiddenSystemProps';
import { marginSystemProps } from './marginSystemProps';
import { paddingSystemProps } from './paddingSystemProps';

export const systemProps = {
  ...marginSystemProps,
  ...paddingSystemProps,
  ...colorSystemProps,
  ...hiddenSystemProps
};
