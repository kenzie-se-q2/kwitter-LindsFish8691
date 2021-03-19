import React, { useEffect, useState } from "react";
import { getUserList } from "../fetchRequests";
import User from "./User.js";

const UserList = () => {
  //use lifecycle hook to load all users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //get list of users
    getUserList().then((usersData) => {
      setUsers(usersData);
    });
  }, []);

  return (
    <ul>
      <h3>Here's a div</h3>
      <li>
        {users.map((user) => {
          return <User user={user} key={user.username} />;
        })}
      </li>
    </ul>
  );
};

export default UserList;

{
  /* {users.map((user) => {
    return <User user={user} key={user.username} />
  }
     */
}
