import React from 'react';
import Header from 'containers/Header';
import Footer from 'containers/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
