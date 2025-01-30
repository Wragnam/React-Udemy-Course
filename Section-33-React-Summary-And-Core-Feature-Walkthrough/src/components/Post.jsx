import classes from "./Post.module.css";
import { Link } from "react-router-dom";

export default function Post({ name, text, id }) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{name}</p>
        <p className={classes.text}>{text}</p>
      </Link>
    </li>
  );
}
