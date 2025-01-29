import classes from "./Post.module.css";

export default function Post({ name, text }) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{name}</p>
      <p className={classes.text}>{text}</p>
    </div>
  );
}
