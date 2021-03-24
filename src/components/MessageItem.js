import React from "react";
import { Link } from "react-router-dom";
import { useStore, LIKES } from "../store/store";
import { likeRequest } from "../fetchRequests";
import { Card, Button } from "react-bootstrap";
import Moment from "moment";
import User from "../components/UserCard/User.js";
import { GET_MESSAGES, POST_MESSAGES } from "../store/store";

function MessageItem(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  let likes = props.likes;

 
  const handleLikes = (e) => {
    e.preventDefault();
    likeRequest().then((likesData) => {
      dispatch({ type: LIKES, payload: likesData.likes });
      console.log(likesData.likes);
    });
  }
 



  
  // const handleDeleteMessage = (e) => {
  //   deleteMessageRequest(message.token, id).then((deleteMessageData) => {
  //     dispatch({ type: DELETE_MESSAGE, payload: deleteMessageData.deleteMessage});
  //   });
  // }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.username}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{Moment(props.createdAt).format("MM-DD-YYYY")}</Card.Subtitle>
          <Card.Text>{props.text}</Card.Text>
          <Card.Text>{props.likes}</Card.Text>

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

  
