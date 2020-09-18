import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import useCurrentWidth from '../../hooks/useCurrentWidth';
import useHasMounted from '../../hooks/useHasMounted';
import styled from 'styled-components';
import { debounce } from 'lodash';
import Menu from './menu';

import './header.scss';
import DarkToggle from '../dark-toggle/dark-toggle';

const Header = ({ siteTitle }) => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const hasMounted = useHasMounted();
  const headerRef = useRef();

  const toggleMenu = () => {
    let newMenuOpen = !menuOpen;
    //setMenuOpen(newMenuOpen);
    let body = document.body;
    if (newMenuOpen) {
      setMenuOpen(true)
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      //const scrollY = window.scrollY;//document.documentElement.style.getPropertyValue('--scroll-y');
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
    }
    else {
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      setMenuOpen(false);
    }
    //body.style.height = newMenuOpen ? '100vh' : 'initial';
    /* if (typeof document !== `undefined`) {
      let body = document.body;
      body.style.overflow = !menuOpen ? 'hidden' : 'initial';
    } */
  }

  const resetPage = () => {
    setMenuOpen(false);
    let header = document.getElementById('siteHeader');
    let body = document.body;
    header.classList.remove('sticky');
    body.style.position = 'initial';
    body.style.top = '';
  };

  if (hasMounted) {
    window.addEventListener('resize', debounce(() => {
      if (menuOpen) {
        toggleMenu();
      }
    }), 1000);

    window.onscroll = () => {
      document.documentElement.style.setProperty('--scroll-y', window.scrollY);
      let body = document.body;
      if (headerRef.current) {
        var header = headerRef.current;
        var sticky = header.offsetTop;
        const yOffset = parseFloat(document.documentElement.style.getPropertyValue('--scroll-y'));
        if (yOffset > sticky || (body.style.top != '' && parseFloat(body.style.top.replace('px', '')) != 0)) {
          header.classList.add('sticky');
        } 
        else {
          header.classList.remove('sticky');
        }
      }
    };
  }

  /* let body = document.body;
  body.style.overflow = 'initial';
  body.style.height = 'initial'; */

  /* const toggleMenu = () => {
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
  } */

  return (
    <header id='siteHeader' ref={headerRef}>
      <div className='container'>
        <div className='level'>
          <div className='level-left'>
            <div className='level-item'>
              <Link onClick={resetPage} to='/' className='name-logo'>
                <div>STEPHEN</div>
                <div>BRADLEY</div>
              </Link>
            </div>
          </div>
          <div className='level-right'>
            <div className='level-item'>
              <DarkToggle />
            </div>
            <div className='level-item'>
              <button className={`hamburger hamburger--squeeze ${menuOpen && 'is-active'}`} type='button' onClick={toggleMenu}>
                <span className='hamburger-box'>
                  <span className='hamburger-inner'></span>
                </span>
              </button>
              <Menu>
                <div className={`menu ${menuOpen && 'is-active'}`}>
                  <div className='menu-container'>
                    <div className='columns is-centered is-vcentered'>
                      <div className='column'>
                        <div><Link onClick={resetPage} className='menu-item' to='/'>Home</Link></div>
                        <div><Link onClick={resetPage} className='menu-item' to='/articles'>Articles</Link></div>
                        <div><Link onClick={resetPage} className='menu-item' to='/about'>About</Link></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='siteHeader-outer'>
        <CenterAligned>
          <h1 className='site-title rainbow-text'>
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
              <Link to='/articles'>articles</Link>
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
      </div>  */}
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
