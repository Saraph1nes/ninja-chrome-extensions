import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import './index.less';

const NavPanelModal = (props) => {
  const { visible, onCancel } = props;

  const el = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });

  const close = () => {
    typeof onCancel === 'function' && onCancel();
  };

  return ReactDOM.createPortal(
    <div>
      <div className={`nav-panel-modal ${visible ? 'visible' : ''}`}>{props.children}</div>
      <div className={`nav-panel-modal-mask ${visible ? 'visible' : ''}`} onClick={close}></div>
    </div>,
    el,
  );
};

export default NavPanelModal;
