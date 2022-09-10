import './Header.scss';

import React from 'react';

import { Box, Divider, Flex, Icons, Text } from '../../Atoms';
import {
  ChoiceChipGroup,
  ChoiceChipGroupProps
} from '../../Molecules/ChoiceChipGroup';

export interface HeaderProps {
  title: string;
  subtitle: string;
  introBlock: {
    title: string;
    description: string;
  };
  choiceCategoryLabel: string;
  choiceCategoryActive?: string;
  choiceCategories: ChoiceChipGroupProps['choices'];
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  introBlock,
  choiceCategoryLabel,
  choiceCategories,
  choiceCategoryActive
}) => (
  <Box as="header" bg="primary-light" color="white" className="header">
    <Flex
      justifyContent={{ xs: 'between' }}
      alignItems="center"
      py={{ xs: 's' }}
      px={{ xs: 'm', md: 'l' }}
    >
      <Flex alignItems="center">
        <Icons.Logo className="header__logo" />
        <Box ml={{ xs: 'xxs' }} size={{ xs: 'xxs', md: 'm' }}>
          <Text>{title}</Text>
          <Text>{subtitle}</Text>
        </Box>
      </Flex>
      <Icons.Search width="18px" height="18px" />
    </Flex>
    <Divider variant="neutral" />
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
        <Box className="header__choice-chip-group">
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
