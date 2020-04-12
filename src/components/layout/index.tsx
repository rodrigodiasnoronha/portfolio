import React from 'react';
import Header from '../header';
import { LayoutWrapper } from './_styles';

const Layout: React.FC = ({ children }) => (
    <LayoutWrapper>
        <Header />
        <div className="content">{children}</div>
    </LayoutWrapper>
);

export default Layout;
