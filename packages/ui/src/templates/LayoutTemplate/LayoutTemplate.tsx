import React from 'react';

export interface LayoutTemplateProps {
  children: React.ReactNode;
}

export const LayoutTemplate: React.FC<LayoutTemplateProps> = ({ children }) => (
  <>{children}</>
);
