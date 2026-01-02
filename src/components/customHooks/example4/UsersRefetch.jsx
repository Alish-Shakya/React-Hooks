import React from "react";
import useUsers from "./useUsers";

const UsersRefetch = () => {
  const { refetch, loading } = useUsers();

  return (
    <button onClick={refetch} disabled={loading}>
      {loading ? "Refreshing..." : "Refetch Users"}
    </button>
  );
};

export default UsersRefetch;
