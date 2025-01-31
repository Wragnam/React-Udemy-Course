import classes from "./UsersList.module.css";
import User from "./User";

export default function UserList({ users }) {
  return (
    <ul className={classes.users}>
      {users.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
}
