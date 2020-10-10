import React from 'react';

import './emphasis.scss';

import InformationIcon from '../../images/information.inline.svg';

const Emphasis = (props) => {
  let children = props.children;

  return (
    <aside className='emphasis'>
      <div className='emphasis-icon'>
        <InformationIcon />
      </div>
      <div className='emphasis-body'>
        { children }
      </div>
    </aside>
  );
};

export default Emphasis;