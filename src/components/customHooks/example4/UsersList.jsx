import React from "react";
import useUsers from "./useUsers";

const UsersList = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          {u.firstName} {u.lastName}
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
