import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './pagination.scss';

const Pagination = (props) => {
  const [page, setPage] = useState(0);
  const { numItems, numItemsPerPage, onPageChange } = props;

  const pageChanged = (pageNum) => {
    setPage(pageNum);
    onPageChange(pageNum);
  };

  const numPages = Math.ceil(numItems / numItemsPerPage);
  return (
    <div className='pagination'>
      {[...Array(numPages).keys()].map(pageIndex => (
        <button key={`pagination-${pageIndex}`} onClick={() => pageChanged(pageIndex)} className={`number-button ${(pageIndex === page) ? 'current' : ''}`}>{ pageIndex + 1 }</button>
      ))}
    </div>
  );
}

Pagination.propTypes = {
  numItems: PropTypes.number.isRequired,
  numItemsPerPage: PropTypes.number,
  onPageChange: PropTypes.func
}

Pagination.defaultProps = {
  numItemsPerPage: 3,
}

export default Pagination;