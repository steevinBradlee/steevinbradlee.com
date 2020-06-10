import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';

const LeftColLayout = ({ leftColChildren, mainBodyChildren }) => {
  return (
    <div className='container'>
      <div className='columns'>
        <div className='column'>
          {leftColChildren}
        </div>
        <div className='column is-four-fifths'>
          {mainBodyChildren}
        </div>
      </div>
    </div>
  )
};

LeftColLayout.propTypes = {
  leftColChildren: PropTypes.node.isRequired,
  mainBodyChildren: PropTypes.node.isRequired,
};

export default LeftColLayout;
