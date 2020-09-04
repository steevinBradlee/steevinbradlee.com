import React from 'react';
import ReactDOM from 'react-dom';
import useHasMounted from '../../hooks/useHasMounted';

const Menu = (props) => {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
  const modalRoot = document.getElementById('menuOverlay');
  return ReactDOM.createPortal(props.children, modalRoot);
};

export default Menu;