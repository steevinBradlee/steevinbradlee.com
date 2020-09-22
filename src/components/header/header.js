import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import useHasMounted from '../../hooks/useHasMounted';
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
    let body = document.body;
    if (newMenuOpen) {
      setMenuOpen(true)
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
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
  }

  const resetPage = () => {
    setMenuOpen(false);
    let header = document.getElementById('siteHeader');
    let body = document.body;
    header.classList.remove('sticky');
    body.style.position = '';
    body.style.top = '';
    document.documentElement.style.setProperty('--scroll-y', 0);
  };

  if (hasMounted) {
    window.addEventListener('resize', debounce(() => {
      if (menuOpen) {
        toggleMenu();
      }
    }), 1000);

    window.addEventListener('scroll', debounce(() => {
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
    }), 250);
  }

  return (
    <header id='siteHeader' ref={headerRef}>
      <div>
        <div className='container'>
          <div>
            <div className='left'>
              <div>
                <Link onClick={resetPage} to='/' className='name-logo'>
                  <div>STEPHEN</div>
                  <div>BRADLEY</div>
                </Link>
              </div>
            </div>
            <div className='right'>
              <div>
                <DarkToggle />
              </div>
              <div>
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
