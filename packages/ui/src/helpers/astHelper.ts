import HTMLParseStringify from 'html-parse-stringify';

import { ASTNode, ASTNodeType } from '../types/ast';

export type ReplaceTagFn<TProps = Record<string, unknown>> = (
  options: { children: React.ReactNode } & TProps
) => React.ReactNode;

const serialize = ({
  astNode,
  replaceTags
}: {
  astNode: ASTNode[] | ASTNode;
  replaceTags: Partial<Record<keyof HTMLElementTagNameMap, ReplaceTagFn>>;
}): React.ReactNode => {
  if (Array.isArray(astNode)) {
    return astNode.map((currentAstNode, key) => {
      return serialize({ astNode: currentAstNode, replaceTags });
    });
  }

  if (astNode.type === ASTNodeType.TAG && astNode.name) {
    const children = serialize({ astNode: astNode.children, replaceTags });
    const replaceTag = replaceTags[astNode.name];
    if (replaceTag) {
      return replaceTag({ children, ...astNode.attrs });
    }
  } else if ([ASTNodeType.TEXT, ASTNodeType.CONTENT].includes(astNode.type)) {
    return astNode.content;
  }

  return '';
};

export const transform = (
  content: string,
  replaceTags: Partial<Record<keyof HTMLElementTagNameMap, ReplaceTagFn>>
): React.ReactNode => {
  const astNode = HTMLParseStringify.parse<ASTNode[] | ASTNode>(content);
  return serialize({ astNode, replaceTags });
};
