import { useRef } from "react";
import { createPortal } from "react-dom";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";

const Modal = forwardRef(function Modal(
  { title, checkOut, children, clickFn, fnName },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="modal" id="modal" ref={dialog}>
      <h2>{title}</h2>
      {children}
      <form method="dialog" className="modal-actions">
        <button className="text-button">Close</button>
        {checkOut && (
          <button className="button" onClick={clickFn}>
            {fnName}
          </button>
        )}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
