import React from "react";
import { Link } from "react-router-dom";
import { useStore, LIKES } from "../store/store";
import { likeRequest } from "../fetchRequests";
import { Card, Button } from "react-bootstrap";
import Moment from "moment";
import User from "../components/UserCard/User.js";
import { GET_MESSAGES, POST_MESSAGES, DELETE_MESSAGES, GET_MESSAGE_LIKES } from "../store/store";

function MessageItem(props) {
  const dispatch = useStore((state) => state.dispatch);
  const likes = useStore((state) => state.likes);
  const postMessages = useStore((state) => state.postMessages);
  const deleteMessages = useStore((state) => state.deleteMessages);
  const getMessages = useStore((state) => state.getMessages);

  const handleLikes = (e) => {
    e.preventDefault();
    likeRequest().then((likesData) => {
      dispatch({ type: LIKES, payload: likesData.likes });
      console.log(likesData.likes);
    });
  }
  const handleGetMessages = (e) => {
    getMessageRequest(MessageItem).then((getMessageData) => {
      dispatch({ type: GET_MESSAGES, payload: getMessageData.getMessage });
    });
  } 
  
  const handleDeleteMessage = (e) => {
    deleteMessageRequest(message.token, id).then((deleteMessageData) => {
      dispatch({ type: DELETE_MESSAGE, payload: deleteMessageData.deleteMessage});
    });
  }

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
          <Button className=" POST_MESSAGES" onClick={handlePostMessages}>
            Post
          </Button>
          <Button className="DELETE_MESSAGES" onClick={handleDeleteMessages}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
  }

export default MessageItem;

  
