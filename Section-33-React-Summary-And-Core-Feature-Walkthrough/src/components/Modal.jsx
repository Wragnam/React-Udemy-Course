import classes from "./Modal.module.css";

export default function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}
