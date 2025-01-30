import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

export default function Modal({ children }) {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}
