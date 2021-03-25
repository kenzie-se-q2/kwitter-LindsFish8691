import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import Moment from "moment";
import { getMessage } from "../../fetchRequests";
import MessageItem from "../MessageItem.js";

const Message = ({ match }) => {
  const [message, setMessage] = useState({});

  useEffect(() => {
    getMessage(match.params.id)
      .then((data) => setMessage(data.message))
      .then(() => console.log(message));
  }, []);

  return (
    <h1>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Created By: {message.username}</Card.Title>
          <Card.Title>Created On: {Moment(message.createdAt).format("MM-DD-YYYY")}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{message.text}</ListGroupItem>
          <Button href="/messages">Go Back</Button>
        </ListGroup>
      </Card>
    </h1>
  );
};

export default Message;

{
}
