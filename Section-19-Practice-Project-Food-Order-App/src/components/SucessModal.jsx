import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./UI/Button";

const SuccessModal = forwardRef(function SuccessModal({ children }, ref) {
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
      <h2>Success!</h2>
      {children}
      <form method="dialog" className="modal-actions">
        <Button>Okay</Button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default SuccessModal;
