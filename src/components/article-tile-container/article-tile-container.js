import React from 'react';
import PropTypes from 'prop-types';

import './article-tile-container.scss';

const ArticleTileContainer = (props) => (
  <div className='article-tile-container'>
    {props.children.map((child, index) => (
      <div key={`tile-${index}`}>{child}</div>
    ))}
  </div>
);

ArticleTileContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default ArticleTileContainer;