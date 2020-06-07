import { useEffect } from 'react';
import ReactDom from 'react-dom';
import './Modal.css';

function Modal ({ children }) {
  const modalRoot = document.getElementById('modal-root');
  const divEl = document.createElement('div')

  useEffect(() => {
    // Update the document title using the browser API
    modalRoot.appendChild(divEl);

    // returned function will be called on component unmount 
    return () => {
      modalRoot.removeChild(divEl);
    }
  }, [modalRoot, divEl]);

  return (
    ReactDom.createPortal(children, divEl)
  );
}

export default Modal;


