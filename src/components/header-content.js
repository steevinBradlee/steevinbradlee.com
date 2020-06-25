import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useCurrentWidth from '../hooks/useCurrentWidth';
import styled from 'styled-components';

const HeaderContent = ({ children }) => {
  const screenWidth = useCurrentWidth();
  const isMobile = screenWidth <= 768;

  var desktopStyle = {
    background: 'black',
    display: 'flex'
  }

  var mobileStyle = {
    background: 'black',
    display: 'block',
    position: 'absolute',
    width: '100%',
    left: '0px',
    height: '800px',
    zIndex: 2
  }

  return (
    <div style={isMobile ? mobileStyle : desktopStyle}>
      {children}
    </div>
  );
}

export default HeaderContent
