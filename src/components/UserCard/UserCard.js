import React from "react";
import { Card, Button } from "react-bootstrap";
import Moment from "moment";
import User from "./User.js";
import { Link } from "react-router-dom";
import { baseURL } from "../../fetchRequests.js";

const UserCard = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.displayName}</Card.Title>
          <Card.Text>Username: {user.username}</Card.Text>

          <Card.Img
            variant="top"
            alt="No Image Yet"
            src={`${baseURL}users/${user.username}/picture`}
          />
          <Card.Text>{Moment(user.createdAt).format("MM-DD-YYYY")}</Card.Text>
          <Button variant="dark">
            <Link
              to={`users/${user.username}`}
              render={(props) => <User {...props} />}
            >
              Go to User Info
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
