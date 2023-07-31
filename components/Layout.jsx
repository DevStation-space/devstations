import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Particle from './Particle';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Particle />
      <Footer />
    </div>
  );
};

export default Layout;
