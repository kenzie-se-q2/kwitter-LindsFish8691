import React, { useState, useEffect } from "react";
import MessageItem from "../components/MessageItem";
import { useStore, GET_MESSAGES } from "../store/store";
import { getMessages } from "../fetchRequests";

function MessageList(props) {
  const dispatch = useStore((state) => state.dispatch);

  const store = useStore();
  useEffect(() => {
    getMessages().then((messagesData) => {
      dispatch({ type: GET_MESSAGES, payload: messagesData.messages });
      console.log(messagesData.messages);
    });
    console.log(store);
  }, []);

  // console.log(messages);
  return (
    <section className="Messages">
      <ul className="MessageList">
        {store.messages &&
          store.messages.map((message) => (
            <MessageItem
              id={message.id}
              text={message.text}
              username={message.username}
              createdAt={props.createdAt}
              likes={props.likes}
            />
          ))}
      </ul>
    </section>
  );
}

export default MessageList;
