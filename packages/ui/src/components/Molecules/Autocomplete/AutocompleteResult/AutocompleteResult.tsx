import './AutocompleteResult.scss';

import classNames from 'classnames';
import React from 'react';

import { Box, BoxProps, Link, LinkProps } from '../../../Atoms';
import { SearchNotFound, SearchNotFoundProps } from '../../SearchNotFound';
import { TextHighlight } from '../../TextHighlight';

export interface AutocompleteItem {
  id: string;
  title: string;
  description: string;
}

export interface AutocompleteResultProps extends BoxProps {
  /**
   * The items of autocomplete field
   */
  items: (AutocompleteItem & BoxProps)[];
  searchValue?: string;
  searchNotFoundProps: SearchNotFoundProps;
  seeAllSearchLinkProps: Omit<LinkProps, 'children'> & { label: string };
  highlightedIndex?: number;
}

export const AutocompleteResult: React.FC<AutocompleteResultProps> = ({
  items,
  searchValue,
  searchNotFoundProps,
  seeAllSearchLinkProps: {
    label: seeAllSearchLinkLabel,
    ...seeAllSearchLinkProps
  },
  highlightedIndex = 0,
  ...boxProps
}) => (
  <Box
    {...boxProps}
    className={classNames('autocomplete-result', boxProps?.className)}
  >
    {items.length === 0 ? (
      <SearchNotFound {...searchNotFoundProps} pb={{ xs: 'xl' }} />
    ) : (
      <>
        {items.map(({ id, title, description, ...itemBoxProps }, index) => {
          const isHighlighted = highlightedIndex === index;
          return (
            <Box
              {...itemBoxProps}
              pt={{ xs: 'xxs' }}
              pb={{ xs: 'xs' }}
              px={{ xs: 'm' }}
              key={id}
              className={classNames('autocomplete-result__item', {
                'autocomplete-result__item--is-highlighted': isHighlighted
              })}
            >
              <TextHighlight
                size={{ xs: 'xxs', md: 'xs' }}
                text={title}
                textQuery={searchValue}
              />
              <TextHighlight
                size={{ xs: 'xxs' }}
                text={description}
                textQuery={searchValue}
                hiddenDown="sm"
              />
            </Box>
          );
        })}
        <Box
          pt={{ xs: 's', md: 'm' }}
          pb={{ xs: 'm', md: 'l' }}
          size={{ xs: 'xxs', md: 'xs' }}
          textAlign="center"
        >
          <Link {...seeAllSearchLinkProps}>{seeAllSearchLinkLabel}</Link>
        </Box>
      </>
    )}
  </Box>
);
