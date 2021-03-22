import React, { useState, useEffect } from "react";
import { getUser } from "../../fetchRequests.js";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import Moment from "moment";

const User = ({ match }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(match.params.username).then((data) => setUser(data.user));
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src={user.pictureLocation} /> */}
        <Card.Body>
          <Card.Title>Username: {user.username}</Card.Title>
          <Card.Title>display Name: {user.displayName}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{Moment(user.createdAt).format("MM-DD-YYYY")}</ListGroupItem>
          <ListGroupItem>{Moment(user.updatedAt).format("MM-DD-YYYY")}</ListGroupItem>
          <ListGroupItem>Google ID: {user.googleId}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          About {user.displayName}: {user.about}
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
