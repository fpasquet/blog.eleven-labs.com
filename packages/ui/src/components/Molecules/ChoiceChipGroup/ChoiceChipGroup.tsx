import * as React from 'react';

import { SpacingSystemProps } from '../../../types/SystemProps';
import { ChoiceChip, ChoiceChipProps, Flex } from '../../Atoms';

export interface ChoiceChipGroupProps extends SpacingSystemProps {
  choices: ({ name: string; label: string } & Omit<
    ChoiceChipProps,
    'isActive' | 'children'
  >)[];
  choiceActive?: string;
}

export const ChoiceChipGroup: React.FC<ChoiceChipGroupProps> = ({
  choices,
  choiceActive,
  ...nativeProps
}) => (
  <Flex gap={{ xs: 'xs', md: 'xl' }} alignItems="center" {...nativeProps}>
    {choices.map(({ name, label, ...choiceProps }) => (
      <ChoiceChip
        key={name}
        isActive={(choiceActive || choices[0].name) === name}
        {...choiceProps}
      >
        {label}
      </ChoiceChip>
    ))}
  </Flex>
);
