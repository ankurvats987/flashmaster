import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, isOpen, title, desc }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (!modalElement) return;

    if (isOpen) {
      modalElement.showModal();
      modalElement.style.visibility = "visible";
    } else {
      modalElement.close();
      modalElement.style.visibility = "hidden";
    }
  }, [isOpen]);

  return ReactDOM.createPortal(
    <>
      <dialog ref={modalRef} className="modal">
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className="button-container">{children}</div>
      </dialog>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
