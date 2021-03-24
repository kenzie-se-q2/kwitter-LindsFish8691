import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard/UserCard.js";
import { getUserList } from "../fetchRequests.js";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserList().then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      <h1>Members List</h1>
      {users.map((user) => {
        return <UserCard user={user} key={user.username} />;
      })}
    </div>
  );
};

export default UserList;
