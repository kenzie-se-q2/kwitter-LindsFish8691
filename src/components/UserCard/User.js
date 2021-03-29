import React, { useState, useEffect } from "react";
import { baseURL, getUser } from "../../fetchRequests.js";
import { Card, ListGroupItem, ListGroup, Button, Image } from "react-bootstrap";
import Moment from "moment";
import Menu from "../Menu.js";

const User = ({ match }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(match.params.username).then((data) => setUser(data.user));
  }, []);

  return (
    <div>
      <Menu />
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src={user.pictureLocation} /> */}
        <Image src={`${baseURL}users/${user.username}/picture`} rounded />
        <Card.Body>
          <Card.Title>Username: {user.username}</Card.Title>
          <Card.Title>display Name: {user.displayName}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Created On:{Moment(user.createdAt).format("MM-DD-YYYY")}</ListGroupItem>
          <ListGroupItem>Updated on:{Moment(user.updatedAt).format("MM-DD-YYYY")}</ListGroupItem>
          <ListGroupItem>Google ID: {user.googleId}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          About {user.displayName}: {user.about}
        </Card.Body>
        <Button variant="dark" href="/users">
          Go Back
        </Button>
      </Card>
    </div>
  );
};

export default User;
