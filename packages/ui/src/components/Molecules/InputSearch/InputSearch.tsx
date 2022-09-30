import './InputSearch.scss';

import classNames from 'classnames';
import React from 'react';

import { Search as IconSearch } from '../../Atoms/Icons';
import { Input, InputProps } from '../../Atoms/Input';
import { Box, BoxProps } from '../../Atoms/Layout/Box';

export interface InputSearchProps extends BoxProps {
  inputProps: InputProps;
}

export const InputSearch: React.FC<InputSearchProps> = ({
  inputProps,
  ...boxProps
}) => (
  <Box
    {...boxProps}
    className={classNames('input-search', boxProps?.className)}
  >
    <Input {...inputProps} variant="search" className="input-search__input" />
    <button className="input-search__button">
      <IconSearch className="input-search__icon" />
    </button>
  </Box>
);
