import React, { useState, useEffect } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import Moment from "moment";
import { getMessage } from "../../fetchRequests";

const Message = ({ match }) => {
  const [message, setMessage] = useState({});

  useEffect(() => {
    getMessage(match.params.id).then((data) => setMessage(data.message));
  }, []);

  return <div>hi</div>;
};

export default Message;

{
  /* <Card style={{ width: "18rem" }}>
  <Card.Body>
    <Card.Title>Username:</Card.Title>
    <Card.Title>display Name:</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem></ListGroupItem>
    <ListGroupItem></ListGroupItem>
  </ListGroup>
</Card> */
}
