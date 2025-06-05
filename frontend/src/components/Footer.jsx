import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-muted py-4 mt-5 border-top">
      <small>&copy; {new Date().getFullYear()} SnapBasket. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
