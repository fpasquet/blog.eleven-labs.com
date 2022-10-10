import { ColorSystemProps } from './ColorSystemProps';
import { HiddenSystemProps } from './HiddenSystemProps';
import { SpacingSystemProps } from './SpacingSystemProps';

export interface SystemProps
  extends ColorSystemProps,
    SpacingSystemProps,
    HiddenSystemProps {}
