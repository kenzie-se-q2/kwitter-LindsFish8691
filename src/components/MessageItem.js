import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStore, LIKE } from "../store/store";
import { likeRequest } from "../fetchRequests";
import { Card, Button } from "react-bootstrap";
import Moment from "moment";
import User from "../components/UserCard/User.js";

function MessageItem(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  const [alreadyLiked, setAlreadyLiked] = useState(false)


  const { id } = props;

  const handleLikes = (e) => {
    // e.preventDefault();
    likeRequest(user.token, id).then((likesData) => {
      console.log(likesData)
      if (likesData.message === "Like already exists"){
        setAlreadyLiked(!alreadyLiked)
      }
      dispatch({ type: LIKE, payload: likesData });
    });
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {Moment(props.createdAt).format("MM-DD-YYYY")}
          </Card.Subtitle>
          <Card.Text>{props.text}</Card.Text>
          <Card.Text>Likes: {props.likes}</Card.Text>

          <Card.Link to="#">
            <Link
              to={`users/${props.username}`}
              render={(props) => <User {...props} />}
            >
              Go to profile
            </Link>
          </Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
          <Button className="Likes" onClick={handleLikes} disabled={alreadyLiked}>
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
