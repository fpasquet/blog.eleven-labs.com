import './SubHeader.scss';

import React from 'react';

import { Box } from '../../Atoms/Layout/Box';
import { Flex } from '../../Atoms/Layout/Flex';
import { Text } from '../../Atoms/Typography/Text';
import {
  ChoiceChipGroup,
  ChoiceChipGroupProps
} from '../../Molecules/ChoiceChipGroup';

export interface SubHeaderProps {
  introBlock: {
    title: string;
    description: string;
  };
  choiceCategoryLabel: string;
  choiceCategoryActive?: string;
  choiceCategories: ChoiceChipGroupProps['choices'];
}

export const SubHeader: React.FC<SubHeaderProps> = ({
  introBlock,
  choiceCategoryLabel,
  choiceCategories,
  choiceCategoryActive
}) => (
  <Box bg="primary-light" color="white" className="sub-header">
    <Flex
      direction="column"
      pt={{ xs: 's' }}
      pb={{ xs: 'l' }}
      justifyContent={{ md: 'center' }}
      alignItems={{ md: 'center' }}
    >
      <Box>
        <Box px={{ xs: 'm' }}>
          <Text size={{ xs: 'm', md: 'l' }} weight="medium">
            {introBlock.title}
          </Text>
          <Text
            mt={{ xs: 'xxs-3' }}
            size={{ xs: 'xl', md: 'xxl-2' }}
            weight="bold"
            dangerouslySetInnerHTML={{ __html: introBlock.description }}
          />
          <Text mt="s" size={{ xs: 'm', md: 'l' }} weight="medium">
            {choiceCategoryLabel}
          </Text>
        </Box>
        <Box className="sub-header__choice-chip-group">
          <ChoiceChipGroup
            mt="s"
            px={{ xs: 'm' }}
            choices={choiceCategories}
            choiceActive={choiceCategoryActive}
          />
        </Box>
      </Box>
    </Flex>
  </Box>
);
