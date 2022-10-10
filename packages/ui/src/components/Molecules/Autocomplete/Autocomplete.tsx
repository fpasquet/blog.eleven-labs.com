import './Autocomplete.scss';

import React from 'react';

import { Box, BoxProps } from '../../Atoms';
import {
  AutocompleteResult,
  AutocompleteResultProps
} from './AutocompleteResult';
import {
  AutocompleteSearch,
  AutocompleteSearchProps
} from './AutocompleteSearch';

export interface AutocompleteProps
  extends AutocompleteSearchProps,
    AutocompleteResultProps,
    BoxProps {
  isOpen?: boolean;
  buttonCloseProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  buttonSearchProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  inputProps,
  items = [],
  searchNotFoundProps,
  seeAllSearchLinkProps,
  isOpen = false,
  highlightedIndex,
  buttonCloseProps = {},
  buttonSearchProps = {},
  ...boxProps
}) => {
  return (
    <Box className="autocomplete" {...boxProps}>
      <AutocompleteSearch
        inputProps={inputProps}
        buttonCloseProps={buttonCloseProps}
        buttonSearchProps={buttonSearchProps}
      />
      {isOpen && (
        <AutocompleteResult
          items={items}
          highlightedIndex={highlightedIndex}
          searchValue={inputProps?.value as string | undefined}
          searchNotFoundProps={searchNotFoundProps}
          seeAllSearchLinkProps={seeAllSearchLinkProps}
        />
      )}
    </Box>
  );
};
