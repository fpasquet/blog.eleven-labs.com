import React from 'react';

import { Box, BoxProps } from '../../Atoms/Layout/Box';
import { Text } from '../../Atoms/Typography/Text';

export interface SearchNotFoundProps extends BoxProps {
  title: string;
  description: string;
}

export const SearchNotFound: React.FC<SearchNotFoundProps> = ({
  title,
  description,
  ...boxProps
}) => (
  <Box {...boxProps} textAlign="center">
    <img src="/imgs/search.png" alt="" />
    <Text size={{ xs: 'l', md: 'xxl' }} weight="medium" mt={{ xs: 's' }}>
      {title}
    </Text>
    <Text size={{ xs: 'xxs', md: 'xs' }} mt={{ xs: 'xxs' }}>
      {description}
    </Text>
  </Box>
);
