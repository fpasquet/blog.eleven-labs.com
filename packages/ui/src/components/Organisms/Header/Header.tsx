import './Header.scss';

import React from 'react';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { Box, Flex, FlexProps, Icons, Text } from '../../Atoms';
import { Autocomplete, AutocompleteProps } from '../../Molecules/Autocomplete';

export interface HeaderProps {
  title: string;
  subtitle: string;
  homeLinkProps: FlexProps;
  onClickOpenSearch: () => void;
  onClickCloseSearch: () => void;
  autocompleteDisplayed?: boolean;
  autocompleteProps: AutocompleteProps;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  homeLinkProps,
  autocompleteDisplayed = false,
  onClickOpenSearch,
  onClickCloseSearch,
  autocompleteProps
}) => {
  const isNotTablet = useMediaQuery('upTablet');
  return (
    <Box as="header" bg="primary-light" className="header">
      <Flex
        justifyContent={{ xs: 'between' }}
        alignItems="center"
        py={{ xs: 's' }}
        px={{ xs: 'm', md: 'l' }}
      >
        {(!autocompleteDisplayed || isNotTablet) && (
          <>
            <Flex as="a" {...homeLinkProps} alignItems="center" color="white">
              <Icons.Logo className="header__logo" />
              <Box ml={{ xs: 'xxs' }} size={{ xs: 'xxs', md: 'm' }}>
                <Text weight="medium">{title}</Text>
                <Text weight="bold">{subtitle}</Text>
              </Box>
            </Flex>
            <Icons.Search
              width="18px"
              height="18px"
              color="white"
              className="header__icon-for-mobile"
              onClick={onClickOpenSearch}
            />
          </>
        )}
        {(autocompleteDisplayed || isNotTablet) && (
          <>
            <Icons.Back
              width="18px"
              height="18px"
              color="white"
              className="header__icon-for-mobile"
              onClick={onClickCloseSearch}
            />
            <Autocomplete {...autocompleteProps} />
          </>
        )}
      </Flex>
    </Box>
  );
};
