import classes from "./UsersList.module.css";
import User from "./User";
import Card from "../UI/Card";

export default function UserList({ users }) {
  return (

    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </Card>
  );
}
