import React from 'react';
import './table-of-contents.scss';

const TableOfContents = (props) => {
  const headerElements = props.headerElements;

  const headers = headerElements.map((header, index) => {
    let headerText = header.innerText;
    if (!headerText) {
      return null;
    }
    let headerId = header.id || headerText.replace(/\s/g, '-').toLowerCase();
    return (
      <a href={`#${headerId}`} key={`header_toc_${index}`}>{ headerText }</a>
    );
  });

  return (
    <nav className='table-of-contents'>
      <div className='heading'>CONTENTS</div>
      <a href='#top'>Introduction</a>
      { headers }
    </nav>
  );
};

export default TableOfContents;
