import './Header.scss';

import React from 'react';

import { Box, Flex, Icons, Link, LinkProps, Text } from '../../Atoms';
import {
  InputSearch,
  InputSearchProps
} from '../../Molecules/InputSearch/InputSearch';

export interface HeaderProps {
  title: string;
  subtitle: string;
  homeLinkProps: LinkProps;
  searchInputProps: InputSearchProps;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  homeLinkProps,
  searchInputProps
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
        <Link
          {...homeLinkProps}
          ml={{ xs: 'xxs' }}
          size={{ xs: 'xxs', md: 'm' }}
          active={true}
        >
          <Text weight="medium">{title}</Text>
          <Text weight="bold">{subtitle}</Text>
        </Link>
      </Flex>
      <Icons.Search
        width="18px"
        height="18px"
        className="header__icon-search"
      />
      <InputSearch {...searchInputProps} className="header__input-search" />
    </Flex>
  </Box>
);
