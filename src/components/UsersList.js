import React from "react";
import useResource from "./useResource";

const UsersList = () => {
  const users = useResource("users");
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
