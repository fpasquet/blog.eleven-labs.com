import React from 'react';

import { Box, Divider, Flex, Heading, Icons, Link } from '../../../Atoms';

export interface PostHeaderProps {
  title: string;
  date: string;
  readingTime: string;
  authors: {
    username: string;
    nameWithInitial: string;
  }[];
}

export const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  date,
  readingTime,
  authors
}) => (
  <Box mt={{ xs: 's', md: 'xl' }} size={{ xs: 'xxs', md: 'xs' }}>
    <Heading as="h2" size={{ xs: 'xl', md: 'xxl-2' }} weight="bold">
      {title}
    </Heading>
    <Flex direction={{ xs: 'column', md: 'row' }} mt={{ md: 'xxs-3' }}>
      <Flex mt={{ xs: 'xxs', md: '0' }} color="grey-dark" alignItems="center">
        <Box>
          <Icons.CalendarToday width="12px" height="12px" />
          <Box as="span" ml={{ xs: 'xxs-3' }}>
            {date}
          </Box>
        </Box>
        <Box ml={{ xs: 's' }}>
          <Icons.AccessTime width="15px" height="15px" />
          <Box as="span" ml={{ xs: 'xxs-3' }}>
            {readingTime}
          </Box>
        </Box>
      </Flex>
      <Box mt={{ xs: 'xxs-2', md: '0' }} ml={{ md: 'xxs-3' }} color="grey-dark">
        <Icons.Person width="16px" height="16px" />
        {authors.map((author, index) => (
          <React.Fragment key={author.username}>
            <Link ml={index === 0 ? { xs: 'xxs-3' } : undefined}>
              {author.nameWithInitial}
            </Link>
            {authors.length - 1 !== index && <Box as="span"> & </Box>}
          </React.Fragment>
        ))}
      </Box>
    </Flex>
    <Divider mt={{ xs: 'm' }} />
  </Box>
);
