import './Footer.scss';

import React from 'react';

import {
  Box,
  Button,
  ButtonProps,
  Divider,
  Flex,
  FlexItem,
  Heading,
  Icons,
  Link,
  LinkProps,
  Text
} from '../../Atoms';

export interface FooterProps {
  introBlock: {
    title: string;
    description: string;
  };
  elevenLabsSiteLink: { label: string } & Omit<ButtonProps, 'children'>;
  contactTitle: string;
  contactList: { title: string; description: React.ReactNode }[];
  languageLinks: ({
    name: string;
    label: string;
    active?: boolean;
  } & Omit<LinkProps, 'children'>)[];
}

export const Footer: React.FC<FooterProps> = ({
  introBlock,
  elevenLabsSiteLink: {
    label: elevenLabsSiteLinkLabel,
    ...elevenLabsSiteLinkProps
  },
  contactTitle,
  contactList,
  languageLinks
}) => (
  <Box
    as="footer"
    bg="primary-dark"
    color="white"
    textAlign={{ xs: 'center', md: 'left' }}
    className="footer"
  >
    <Flex
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      pt={{ md: 'xl' }}
      pb={{ md: 'xl' }}
      gap={{ md: 'xxl-3' }}
    >
      <FlexItem>
        <Flex
          justifyContent={{ xs: 'center', md: 'start' }}
          alignItems="center"
          pt={{ xs: 'l', md: '0' }}
          mb="xxs"
        >
          <Icons.Logo width="45px" height="45px" />
          <Heading as="span" size={{ xs: 'xxl-4' }} weight="normal">
            Eleven Labs
          </Heading>
        </Flex>
        <Text size={{ xs: 'xxs-2' }}>{introBlock.title}</Text>
        <Text size={{ xs: 'xxs' }} weight="bold" mb="s">
          {introBlock.description}
        </Text>
        <Button mb="xl" {...elevenLabsSiteLinkProps}>
          {elevenLabsSiteLinkLabel}
        </Button>
      </FlexItem>
      <FlexItem>
        <Heading size={{ xs: 'l' }} mb="s">
          {contactTitle}
        </Heading>
        <Flex direction={{ xs: 'column', md: 'row' }} gap={{ md: 'xl' }}>
          {contactList.map((contact) => (
            <Box
              key={contact.title}
              mb="m"
              className="footer__contact-item"
              size={{ xs: 'xxs' }}
            >
              <Text weight="bold" mb="xxs-2">
                {contact.title}
              </Text>
              <Text>{contact.description}</Text>
            </Box>
          ))}
        </Flex>
      </FlexItem>
    </Flex>
    <Divider variant="neutral" />
    <Flex py="s" justifyContent="center" alignItems="center">
      <Box mr="xxs">
        <Icons.Language width="16px" height="16px" />
      </Box>
      {languageLinks.map(({ label, name, active, ...linkProps }, index) => (
        <React.Fragment key={name}>
          <Link size={{ xs: 'xs' }} active={active} {...linkProps}>
            {label}
          </Link>
          {languageLinks.length - 1 !== index && (
            <Box mx="s" className="footer__circle-separator" />
          )}
        </React.Fragment>
      ))}
    </Flex>
  </Box>
);
