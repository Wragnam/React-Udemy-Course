import Button from "./Button";
import Card from "./Card";
import classes from "./Modal.module.css";

export default function Modal({ onClose, title, message }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onClose}>Okay</Button>
        </footer>
      </Card>
    </>
  );
}
