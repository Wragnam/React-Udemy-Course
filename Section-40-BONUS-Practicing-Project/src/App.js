import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(userData) {
    setUsers((prevUsers) => {
      return [...prevUsers, userData];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUser} />
      {users.length > 0 && <UserList users={users} />}
    </div>
  );
}

export default App;
