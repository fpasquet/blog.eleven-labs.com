import React from 'react';

import { Footer, FooterProps } from '../../components/Organisms/Footer';
import { Header, HeaderProps } from '../../components/Organisms/Header/Header';

export interface LayoutTemplateProps {
  headerProps: HeaderProps;
  footerProps: FooterProps;
  children: React.ReactNode;
}

export const LayoutTemplate: React.FC<LayoutTemplateProps> = ({
  headerProps,
  footerProps,
  children
}) => (
  <>
    <Header {...headerProps} />
    {children}
    <Footer {...footerProps} />
  </>
);
