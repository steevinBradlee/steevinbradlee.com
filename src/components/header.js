import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useCurrentWidth from '../hooks/useCurrentWidth';
import styled from 'styled-components';
import { debounce } from 'lodash';

import './header.scss';

const CenterAligned = styled.div`
  display: flex;
  align-items: center;
`;

const Header = ({ siteTitle }) => {
  const [ menuOpen, setMenuOpen ] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (typeof document !== `undefined`) {
      let body = document.body;
      body.style.overflow = !menuOpen ? 'hidden' : 'initial';
    }
  }

  if (typeof window !== `undefined` && typeof document !== `undefined`) {
    window.addEventListener('resize', debounce(() => {
      let body = document.body;
      body.style.overflow = 'initial';
      if (menuOpen) {
        toggleMenu();
      }
    }), 1000);
  }

  return (
    <header className='site-header'>
      <div className='site-header-outer'>
        <CenterAligned>
          <h1 className='site-title'>
            <Link to='/'>
              {siteTitle}
            </Link>
          </h1>
        </CenterAligned>
        <CenterAligned>
          <div className="hamburger-container">
            <button className={`hamburger hamburger--squeeze ${menuOpen && 'is-active'}`} type='button' onClick={toggleMenu}>
              <span className='hamburger-box'>
                <span className='hamburger-inner'></span>
              </span>
            </button>
          </div>
          <div className="links-container">
            <h1 className='nav-element'>
              <Link to='/articles'>words</Link>
            </h1>
            <h1 className='nav-element'>
              <Link to='/about'>about</Link>
            </h1>
          </div>
          <div className={`mobile-overlay ${menuOpen && 'active'}`}>
            <div>
            <h1 className='nav-element'>
                <Link to='/'>home</Link>
              </h1>
              <h1 className='nav-element'>
                <Link to='/articles'>words</Link>
              </h1>
              <h1 className='nav-element'>
                <Link to='/about'>about</Link>
              </h1>
            </div>
          </div>
        </CenterAligned>
      </div> 
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
