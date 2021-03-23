import React, { useEffect } from "react";
import MessageItem from "../components/MessageItem";
import { useStore, GET_MESSAGES, LIKES, POST_MESSAGES } from "../store/store";
import { getMessages, likeRequest, postMessages, deleteMessages } from "../fetchRequests";

function MessageList(props) {
  const dispatch = useStore((state) => state.dispatch);
  const store = useStore();

  useEffect(() => {
    getMessages().then((messagesData) => {
      dispatch({ type: GET_MESSAGES, payload: messagesData.messages });
      console.log(messagesData.messages);
    });
  }, []);

  useEffect(() => {
    postMessages().then((postMessagesData) => {
      dispatch({ type: POST_MESSAGES, payload: postMessagesData.postMessages });
    });
  }, []);
  
  useEffect(() => {
    deleteMessages().then((dEleteMessagesData) => {
      dispatch({ type: DELETE_MESSAGES, payload: deleteMessagesData.deleteMessages });
    });
  }, []);

  return (
    <section className="Messages">
      <ul className="MessageList">
        {store.messages &&
          store.messages.map((props) => (
            <MessageItem
              id={props.id}
              text={props.text}
              username={props.username}
              createdAt={props.createdAt}
              likes={props.likes}
            />
          ))}
      </ul>
    </section>
  );
}

export default MessageList;
