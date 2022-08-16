import { colorSystemProps } from './colorSystemProps';
import { marginSystemProps } from './marginSystemProps';
import { paddingSystemProps } from './paddingSystemProps';

export const systemProps = {
  ...marginSystemProps,
  ...paddingSystemProps,
  ...colorSystemProps
};
