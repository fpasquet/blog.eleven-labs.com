import React from 'react';

import { transform } from '../../../helpers/astHelper';
import { Box, Heading, Link, Text } from '..';

export interface RichTextProps {
  content: string;
}

export const RichText: React.FC<RichTextProps> = ({ content }) => {
  return (
    <Box>
      {transform(content, {
        h2: ({ children }) => (
          <Heading
            as="h2"
            size={{ xs: 'm', md: 'xl' }}
            mt={{ xs: 'l', md: 'xl' }}
            mb={{ xs: 'xxs', md: 'l' }}
          >
            {children}
          </Heading>
        ),
        h3: ({ children }) => (
          <Heading
            as="h3"
            size={{ xs: 's', md: 'l' }}
            mt={{ xs: 'xs', md: 'l' }}
            mb={{ xs: 'xxs', md: 's' }}
          >
            {children}
          </Heading>
        ),
        p: ({ children }) => (
          <Text size={{ xs: 's', md: 'l' }} mb={{ xs: 'xxs' }}>
            {children}
          </Text>
        ),
        a: ({ children }) => <Link size={{ xs: 's' }}>{children}</Link>,
        img: ({ children, ...props }) =>
          React.createElement('img', { ...props, style: { maxWidth: '100%' } })
      })}
    </Box>
  );
};
