import classes from "./Button.module.css";

export default function Button({ text, onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      {text}
    </button>
  );
}
