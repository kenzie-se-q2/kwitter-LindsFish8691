import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStore, LIKE } from "../store/store";
import { likeRequest, unlike } from "../fetchRequests";
import { Card, Button } from "react-bootstrap";
import Moment from "moment";
import User from "../components/UserCard/User.js";

function MessageItem(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  let likes = props.likes;

  const handleLikes = (e) => {
    likeRequest(user.token, props.id).then((likesData) => {
      if (likesData.message === "Like already exists") {
        likes.filter((ele) => {
          if (ele.username === user.username) {
            let likesId = ele.id;
            unlike(user.token, likesId);
          }
        });
      }
      dispatch({ type: LIKE, payload: likesData });
    });
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{Moment(props.createdAt).format("MM-DD-YYYY")}</Card.Subtitle>
          <Card.Text>{props.text}</Card.Text>
          <Card.Text>Likes: {props.likes.length}</Card.Text>
          <Card.Link to="#">
            <Link to={`users/${props.username}`} render={(props) => <User {...props} />}>
              Go to profile
            </Link>
          </Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
          <Button className="Likes" onClick={handleLikes}>
            like/Unlike
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MessageItem;

{
  /* {props.username},{props.text},{props.id},{props.createdAt} 
      <button className="Likes" onClick={handleLikes}>
          like
</button>*/
}
