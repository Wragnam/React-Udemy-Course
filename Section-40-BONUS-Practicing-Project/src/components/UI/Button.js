import classes from "./Button.module.css";

export default function Button({ children, onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
}
