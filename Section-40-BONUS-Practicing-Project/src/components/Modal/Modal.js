import Button from "../Button/Button";
import classes from "./Modal.module.css";

export default function Modal({ onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <dialog className={classes.modal} open>
        <header>
          <h2>Incorrect age format</h2>
          <p>Please enter a valid name and age (non-empty values).</p>
        </header>
        <div className={classes.actions}>
          <Button onClick={onClose} text="Okay" />
        </div>
      </dialog>
    </>
  );
}
