import parse, * as HTMLReactParser from 'html-react-parser';
import React from 'react';

import {
  getReminderByDomNode,
  getSyntaxHighlighterByDomNode
} from '../../../helpers/richTextHelper';
import {
  TypeWithMediaQueriesType,
  TypographyFontSizeType
} from '../../../types';
import {
  Box,
  BoxProps,
  Heading,
  HeadingHTMLElementType,
  HeadingProps,
  Link,
  Text,
  TextHTMLElementType
} from '..';

export interface RichTextProps extends BoxProps {
  content: string;
}

const htmlReactParserOptions: HTMLReactParser.HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof HTMLReactParser.Element) {
      if (domNode.attribs?.class?.match('admonition')) {
        return getReminderByDomNode(domNode, htmlReactParserOptions);
      }

      if (domNode.tagName === 'pre') {
        return getSyntaxHighlighterByDomNode(domNode, htmlReactParserOptions);
      }

      const children = HTMLReactParser.domToReact(
        domNode.children,
        htmlReactParserOptions
      );
      const props = HTMLReactParser.attributesToProps(domNode.attribs);

      const defaultSize: TypeWithMediaQueriesType<TypographyFontSizeType> = {
        xs: 's',
        md: 'm'
      };

      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(domNode.tagName)) {
        let headingProps: HeadingProps = {};
        switch (domNode.tagName) {
          case 'h2':
            headingProps = {
              size: { xs: 'l', md: 'xl' },
              mt: { xs: 'l', md: 'xl' },
              mb: { xs: 'xxs', md: 'l' }
            };
            break;
          case 'h3':
            headingProps = {
              size: { xs: 'm', md: 'l' },
              mt: { xs: 'xs', md: 'l' },
              mb: { xs: 'xxs', md: 's' }
            };
            break;
          case 'h4':
            headingProps = {
              size: { xs: 's', md: 'm' },
              mt: { xs: 'xs', md: 'l' },
              mb: { xs: 'xxs', md: 's' }
            };
            break;
        }
        return (
          <Heading
            {...headingProps}
            as={domNode.tagName as HeadingHTMLElementType}
          >
            {children}
          </Heading>
        );
      }

      if (['p', 'li'].includes(domNode.tagName)) {
        return (
          <Text
            as={domNode.tagName as TextHTMLElementType}
            size={defaultSize}
            mb={{ xs: 'xxs' }}
          >
            {children}
          </Text>
        );
      }

      if (domNode.tagName === 'a') {
        return (
          <Link {...props} size={defaultSize}>
            {children}
          </Link>
        );
      }

      if (domNode.tagName === 'img') {
        return React.createElement('img', {
          ...props,
          style: {
            display: 'block',
            maxWidth: '100%',
            margin: 'var(--spacing-xs) auto'
          }
        });
      }
    }
  }
};

export const RichText: React.FC<RichTextProps> = ({
  content,
  ...nativeProps
}) => <Box {...nativeProps}>{parse(content, htmlReactParserOptions)}</Box>;
