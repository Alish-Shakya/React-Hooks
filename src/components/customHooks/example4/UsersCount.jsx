import React from "react";
import useUsers from "./useUsers";

const UsersCount = () => {
  const { users } = useUsers();

  return <h3>Total Users: {users.length}</h3>;
};

export default UsersCount;
