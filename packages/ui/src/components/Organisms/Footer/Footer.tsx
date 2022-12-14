import './Footer.scss';

import React from 'react';

import {
  Box,
  Button,
  ButtonProps,
  Divider,
  Flex,
  FlexItem,
  Icons,
  Link,
  LinkProps,
  Text
} from '../../Atoms';
import { SocialIcons, SocialIconsProps } from '../../Molecules/SocialIcons';

export interface FooterProps {
  introBlock: {
    title: string;
    description: string;
  };
  elevenLabsSiteLink: { label: string } & Omit<ButtonProps, 'children'>;
  contactTitle: string;
  contactList: { title: string; description: React.ReactNode }[];
  socialLinks: SocialIconsProps['links'];
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
  socialLinks,
  languageLinks
}) => (
  <Box
    as="footer"
    bg="primary-dark"
    color="white"
    textAlign={{ xs: 'center', md: 'left' }}
    className="footer"
    size={{ xs: 'xxs', md: 'xs' }}
  >
    <Flex
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      pt={{ md: 'xl' }}
      pb={{ md: 'xl' }}
      gap={{ md: 'xxl-3' }}
      mb={{ xs: 'xl' }}
    >
      <FlexItem mb="xl">
        <Flex
          justifyContent={{ xs: 'center', md: 'start' }}
          alignItems="center"
          pt={{ xs: 'l', md: '0' }}
          mb="xxs"
        >
          <Icons.Logo width="45px" height="45px" />
          <Text as="span" size={{ xs: 'xxl', md: 'xxl-2' }}>
            Eleven Labs
          </Text>
        </Flex>
        <Text>{introBlock.title}</Text>
        <Text weight="bold" mb="s">
          {introBlock.description}
        </Text>
        <Button {...elevenLabsSiteLinkProps}>{elevenLabsSiteLinkLabel}</Button>
      </FlexItem>
      <FlexItem>
        <Text size={{ xs: 'l', md: 'xxl' }} weight="medium" mb="s">
          {contactTitle}
        </Text>
        <Flex direction={{ xs: 'column', md: 'row' }} gap={{ md: 'xl' }}>
          {contactList.map((contact, contactIndex) => (
            <Box key={contact.title} mb={{ xs: contactList.length === contactIndex+1 ? 'xs' : 'm' }} className="footer__contact-item">
              <Text weight="bold" mb="xxs-2">
                {contact.title}
              </Text>
              <Text>{contact.description}</Text>
            </Box>
          ))}
        </Flex>
        <SocialIcons links={socialLinks} />
      </FlexItem>
    </Flex>
    <Divider variant="neutral" m={{ xs: '0' }} />
    <Flex py="s" justifyContent="center" alignItems="center">
      <Box mr="xxs">
        <Icons.Language width="16px" height="16px" />
      </Box>
      {languageLinks.map(({ label, name, active, ...linkProps }, index) => (
        <React.Fragment key={name}>
          <Link active={active} {...linkProps}>
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
