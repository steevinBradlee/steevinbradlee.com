import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import './table-of-contents.scss';

const TableOfContents = (props) => {
  const headerElements = props.headerElements;

  const headers = headerElements.map((header, index) => {
    let headerText = header.innerText;
    if (!headerText) {
      return null;
    }
    let headerId = headerText.replace(/\s/g, '-').toLowerCase();
    return (
      <AnchorLink to={`${props.slug}/#${headerId}`} key={`header_toc_${index}`}>{ headerText }</AnchorLink>
    );
  });

  return (
    <nav className='table-of-contents'>
      <div className='heading'>CONTENTS</div>
      <AnchorLink to={`${props.slug}`}>Introduction</AnchorLink>
      { headers }
    </nav>
  );
};

export default TableOfContents;