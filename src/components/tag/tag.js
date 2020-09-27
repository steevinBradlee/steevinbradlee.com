import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './tag.scss';

const Tag = (props) => {
  const { title, link } = props;
  return (
    <>
      {link ?
        <Link className='article-tag' to={link}>{ title }</Link>
        :
        <span className='article-tag'>{ title }</span>
      }
    </>
  )
}

Tag.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
}

export default Tag;