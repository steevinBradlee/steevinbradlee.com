import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>© stephen-bradley • {new Date().getFullYear()}</div>
      <div>Made with ❤️ and GatsbyJS</div>
    </footer>
  );
};

export default Footer;