import React, { useEffect } from "react";
import MessageItem from "../components/MessageItem";
import { useStore, GET_MESSAGES } from "../store/store";
import { getMessages } from "../fetchRequests";

function MessageList(props) {
  const dispatch = useStore((state) => state.dispatch);
  const store = useStore();

  useEffect(() => {
    getMessages().then((messagesData) => {
      dispatch({ type: GET_MESSAGES, payload: messagesData.messages });
    });
  }, [dispatch, store.messages]);


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
               likes={props.likes.length}
            />
          ))}
      </ul>
    </section>
  );
}

export default MessageList;
