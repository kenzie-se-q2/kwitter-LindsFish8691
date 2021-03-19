import React, { useEffect, useState } from "react";
import { getUserList } from "../fetchRequests.js";

const User = ({ user }) => {
  return (
    <div>
      <li>this will display a displayname and createdAt date</li>
      <li>
        <header>{user.displayName}</header>
        <p>{user.createdAt}</p>
      </li>
    </div>
  );
};

export default User;
