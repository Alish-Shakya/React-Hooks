import React from "react";
import useFetch from "./useFetch";

const Users = () => {
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://dummyjson.com/users");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.users.slice(0, 10).map((u) => (
          <li key={u.id}>{u.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
