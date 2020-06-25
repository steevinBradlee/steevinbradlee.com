import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useCurrentWidth from '../hooks/useCurrentWidth';
import styled from 'styled-components';

import './header.scss';

//const documentGlobal = typeof document !== 'undefined' && document;

const Header = ({ siteTitle }) => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const screenWidth = useCurrentWidth();
  const isMobile = screenWidth <= 768;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (typeof document !== `undefined`) {
      let body = document.body;
      body.style.overflow = !menuOpen ? 'hidden' : 'initial';
    }
  }

  const MobileOverlay = styled.div`
    display: block;
    position: fixed;
    height: 100vh;
    width: 100%;
    left: 0px;
    top: 0px;
    z-index: 2;
    background: black;

    > div {
      padding: 6rem 1.75rem;

      > h1 {
        padding-bottom: 1rem;
      }
    }
  `;

  const CenterAligned = styled.div`
    display: flex;
    align-items: center;
  `;

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
          {isMobile &&
            <div style={{position: 'relative', width: '71px', height: '60px'}}>
              <button className={`hamburger hamburger--squeeze ${menuOpen && 'is-active'}`} type='button' onClick={toggleMenu}>
                <span className='hamburger-box'>
                  <span className='hamburger-inner'></span>
                </span>
              </button>
            </div>
          }
          {!isMobile &&
            <div style={{display: 'flex'}}>
              <h1 className='nav-element'>
                <Link to='/articles'>words</Link>
              </h1>
              <h1 className='nav-element'>
                <Link to='/about'>about</Link>
              </h1>
            </div>
          }
          {(isMobile && menuOpen) &&
            <MobileOverlay>
              <div>
                <h1 className='nav-element'>
                  <Link to='/articles'>words</Link>
                </h1>
                <h1 className='nav-element'>
                  <Link to='/about'>about</Link>
                </h1>
              </div>
            </MobileOverlay>
          }
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
