import './InputSearch.scss';

import classNames from 'classnames';
import React from 'react';

import { Search as IconSearch } from '../../Atoms/Icons';
import { Input, InputProps } from '../../Atoms/Input';
import { Box, BoxProps } from '../../Atoms/Layout/Box';
import { Flex } from '../../Atoms/Layout/Flex';

export interface InputSearchProps extends BoxProps {
  inputProps: InputProps;
  buttonCloseProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  buttonSearchProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const InputSearch: React.FC<InputSearchProps> = ({
  inputProps,
  buttonCloseProps = {},
  buttonSearchProps = {},
  ...boxProps
}) => (
  <Box
    {...boxProps}
    className={classNames('input-search', boxProps?.className)}
  >
    <Input {...inputProps} variant="search" className="input-search__input" />
    <Flex
      justifyContent="center"
      alignItems="center"
      className="input-search__button-container"
    >
      {inputProps.value && <button {...buttonCloseProps} className="input-search__button-close"/>}
      <button {...buttonSearchProps} className="input-search__button-search">
        <IconSearch className="input-search__icon" />
      </button>
    </Flex>
  </Box>
);
