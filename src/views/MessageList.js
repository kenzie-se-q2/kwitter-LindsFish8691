import React, { useEffect } from "react";
import MessageItem from "../components/MessageItem";
import { useStore, GET_MESSAGES } from "../store/store";
import MessagePost from "../components/MessagePost.js";
import { getMessages } from "../fetchRequests";
import Menu from "../components/Menu";

function MessageList(props) {
  const dispatch = useStore((state) => state.dispatch);
  const store = useStore();

  useEffect(() => {
    getMessages().then((messagesData) => {
      dispatch({ type: GET_MESSAGES, payload: messagesData.messages });
    });
  }, [dispatch, store.messages]);

  useEffect(() => {
    console.log(window.localStorage);
    if (!window.localStorage.user) {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <div>
        <Menu />
        <MessagePost />
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
    </>
  );
}

export default MessageList;
