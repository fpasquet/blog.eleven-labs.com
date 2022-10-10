import './Header.scss';

import React from 'react';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { Box, Flex, Icons, Link, LinkProps, Text } from '../../Atoms';
import { Autocomplete, AutocompleteProps } from '../../Molecules/Autocomplete';

export interface HeaderProps {
  title: string;
  subtitle: string;
  homeLinkProps: LinkProps;
  autocompleteDisplayed?: boolean;
  autocompleteProps: AutocompleteProps;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  homeLinkProps,
  autocompleteDisplayed = false,
  autocompleteProps
}) => {
  const isNotTablet = useMediaQuery('upTablet');
  return (
    <Box as="header" bg="primary-light" color="white" className="header">
      <Flex
        justifyContent={{ xs: 'between' }}
        alignItems="center"
        py={{ xs: 's' }}
        px={{ xs: 'm', md: 'l' }}
      >
        {(!autocompleteDisplayed || isNotTablet) && (
          <>
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
              className="header__icon-for-mobile"
            />
          </>
        )}
        {(autocompleteDisplayed || isNotTablet) && (
          <>
            <Icons.Back
              width="18px"
              height="18px"
              className="header__icon-for-mobile"
            />
            <Autocomplete {...autocompleteProps} />
          </>
        )}
      </Flex>
    </Box>
  );
};
