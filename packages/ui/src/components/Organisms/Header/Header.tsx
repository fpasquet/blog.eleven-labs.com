import React from 'react';

import logoSvg from '../../../assets/svgs/logo.svg';
import searchSvg from '../../../assets/svgs/search.svg';
import { Box, Divider, Flex, Heading, Svg, Text } from '../../Atoms';

export interface HeaderProps {
  title: string;
  subtitle: string;
  introBlock: {
    title: string;
    description: string;
  };
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  introBlock
}) => (
  <Box as="header" bg="primary-light" color="white">
    <Flex
      justifyContent={{ xs: 'between' }}
      alignItems="center"
      py={{ xs: 's' }}
      px={{ xs: 'm', md: 'l' }}
    >
      <Flex>
        <Svg src={logoSvg} size="30px" />
        <Box ml={{ xs: 'xxs' }}>
          <Text>{title}</Text>
          <Text weight="bold">{subtitle}</Text>
        </Box>
      </Flex>
      <Svg src={searchSvg} size="18px" />
    </Flex>
    <Divider bg="white" />
    <Box py={{ xs: 's' }} px={{ xs: 'm' }}>
      <Text size={{ xs: 'l' }}>{introBlock.title}</Text>
      <Heading mt={{ xs: 'xxs-2' }} size={{ xs: 'xl' }} weight="bold">
        {introBlock.description}
      </Heading>
    </Box>
  </Box>
);
