import React from "react";
import { Link } from "react-router-dom";
import { useStore, LIKES } from "../store/store";
import { likeRequest } from "../fetchRequests";
import { Card, Button } from "react-bootstrap";
import Moment from "moment";
import User from "../components/UserCard/User.js";

function MessageItem(props) {
  const dispatch = useStore((state) => state.dispatch);
  const likes = useStore((state) => state.likes);

  const handleLikes = (e) => {
    e.preventDefault();
    likeRequest().then((likesData) => {
      dispatch({ type: LIKES, payload: likesData.likes });
      console.log(likesData.likes);
    });
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{Moment(props.createdAt).format("MM-DD-YYYY")}</Card.Subtitle>
          <Card.Text>{props.text}</Card.Text>
          <Card.Link to="#">
            <Link to={`users/${props.username}`} render={(props) => <User {...props} />}>
              Go to profile
            </Link>
          </Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
          <Button className="Likes" onClick={handleLikes}>
            like
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
