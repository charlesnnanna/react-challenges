import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const modalRootEl = document.getElementById('modal');

function Modal(props) {
  // const el = document.createElement('div');

  useEffect(() => {
    // modalRootEl.appendChild(el);
  });

  return createPortal(props.children, modalRootEl);
}

export default Modal;
