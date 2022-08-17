import { ASTNodeType } from './ASTNodeType';

export type ASTNode = {
  type: ASTNodeType;
  name?: keyof HTMLElementTagNameMap;
  attrs?: Record<string, string>;
  voidElement?: boolean;
  content?: string;
  children: ASTNode[];
};
