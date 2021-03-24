import React, { useEffect } from "react";
import MessageItem from "../components/MessageItem";
import { useStore, GET_MESSAGES, POST_MESSAGE } from "../store/store";
import { postMessage, getMessages } from "../fetchRequests";
import PostMessage from "../components/MessageHandling/PostMessage.js";

function MessageList(props) {
  const dispatch = useStore((state) => state.dispatch);
  const store = useStore();

  useEffect(() => {
    getMessages().then((messagesData) => {
      dispatch({ type: GET_MESSAGES, payload: messagesData.messages });
    });
  }, [dispatch, store.messages]);


  useEffect(() => {
    postMessage().then((postMessageData) => {
      dispatch({ type: POST_MESSAGE, payload: postMessageData.postMessage });
    });
  }, []);
  
  // useEffect(() => {
  //   deleteMessage().then((deleteMessageData) => {
  //     dispatch({ type: DELETE_MESSAGE, payload: deleteMessageData.deleteMessage });
  //   });
  // }, []);

  return (
    <div>
      <PostMessage/>
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
    </div>
  );
}

export default MessageList;
