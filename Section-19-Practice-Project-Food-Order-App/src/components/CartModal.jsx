import { useRef } from "react";
import { createPortal } from "react-dom";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";
import Button from "./UI/Button";

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
        <Button textOnly>Close</Button>
        {checkOut && <Button onClick={clickFn}>{fnName}</Button>}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
