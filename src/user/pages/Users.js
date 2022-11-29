import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Yayner M",
      image:
        "https://images.unsplash.com/photo-1669654666989-d964d15faacc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      places: 3,
    },
    {
      id: "u2",
      name: "Kidu Tinsae",
      image:
        "https://images.unsplash.com/photo-1669654666989-d964d15faacc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      places: 1,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
