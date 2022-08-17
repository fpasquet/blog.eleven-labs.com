import './Footer.scss';

import React from 'react';

import circleSeparatorSvg from '../../../assets/svgs/circle_separator.svg';
import languageSvg from '../../../assets/svgs/language.svg';
import logoSvg from '../../../assets/svgs/logo.svg';
import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  LinkProps,
  Svg,
  Text
} from '../../Atoms';

export interface FooterProps {
  introBlock: {
    title: string;
    description: string;
  };
  linkToElevenLabsSite: LinkProps;
  contactTitle: string;
  contactList: { title: string; description: React.ReactNode }[];
  languageLinks: {
    name: string;
    active?: boolean;
    linkProps: LinkProps;
  }[];
}

export const Footer: React.FC<FooterProps> = ({
  introBlock,
  linkToElevenLabsSite,
  contactTitle,
  contactList,
  languageLinks
}) => (
  <Box
    as="footer"
    bg="primary-dark"
    color="white"
    textAlign={{ xs: 'center', md: 'left' }}
  >
    <Flex
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      pt={{ md: 'xl' }}
      pb={{ md: 'xl' }}
    >
      <Box>
        <Flex
          justifyContent={{ xs: 'center', md: 'start' }}
          alignItems="center"
          pt={{ xs: 'l', md: '0' }}
          mb="xxs"
        >
          <Svg src={logoSvg} size="45px" />
          <Heading as="span" size="xl">
            Eleven Labs
          </Heading>
        </Flex>

        <Text>{introBlock.title}</Text>
        <Text weight="bold" mb="xl">
          {introBlock.description}
        </Text>
      </Box>

      <Box className="footer__contact-block">
        <Heading mb="s">{contactTitle}</Heading>
        <Flex direction={{ xs: 'column', md: 'row' }}>
          {contactList.map((contact) => (
            <Box mb="m" className="footer__contact-item">
              <Text weight="bold" mb="xxs-2">
                {contact.title}
              </Text>
              <Text>{contact.description}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>

    <Divider bg="white" />

    <Flex py="s" justifyContent="center" alignItems="center">
      <Svg src={languageSvg} size="16px" mr="xxs-2" />
      {languageLinks.map((languageLink, index) => (
        <>
          <Link
            {...languageLink.linkProps}
            weight={languageLink.active ? 'bold' : undefined}
            color={!languageLink.active ? 'amaranth' : undefined}
          >
            {languageLink.name}
          </Link>
          {languageLinks.length - 1 !== index && (
            <Svg src={circleSeparatorSvg} size="6px" mx="s" />
          )}
        </>
      ))}
    </Flex>
  </Box>
);
