import './Header.scss';

import React from 'react';

import { Box, Divider, Flex, Heading, Icons, Text } from '../../Atoms';
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
  choiceCategories: ChoiceChipGroupProps['choices'];
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  introBlock,
  choiceCategoryLabel,
  choiceCategories
}) => (
  <Box as="header" bg="primary-light" color="white" className="header">
    <Flex
      justifyContent={{ xs: 'between' }}
      alignItems="center"
      py={{ xs: 's' }}
      px={{ xs: 'm', md: 'l' }}
    >
      <Flex alignItems="center">
        <Icons.Logo width="30px" height="30px" />
        <Box ml={{ xs: 'xxs' }} size={{ xs: 'xxs', md: 'm' }}>
          <Text>{title}</Text>
          <Text weight="bold">{subtitle}</Text>
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
          <Text size={{ xs: 's', md: 'xl' }}>{introBlock.title}</Text>
          <Heading
            mt={{ xs: 'xxs-2' }}
            size={{ xs: 'xl' }}
            weight="bold"
            dangerouslySetInnerHTML={{ __html: introBlock.description }}
          />
          <Text size={{ xs: 's', md: 'xxl-4' }} mt="s">
            {choiceCategoryLabel}
          </Text>
        </Box>
        <Box className="header__choice-chip-group">
          <ChoiceChipGroup mt="s" px={{ xs: 'm' }} choices={choiceCategories} />
        </Box>
      </Box>
    </Flex>
  </Box>
);
