import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        © stephen-bradley • {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;