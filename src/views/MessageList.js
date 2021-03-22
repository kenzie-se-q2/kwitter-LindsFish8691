import React, { useEffect } from "react";
import MessageItem from "../components/MessageItem";
import { useStore, GET_MESSAGES, LIKES } from "../store/store";
import { getMessages, likeRequest } from "../fetchRequests";

function MessageList(props) {
  const dispatch = useStore((state) => state.dispatch);
  const store = useStore();

  useEffect(() => {
    getMessages().then((messagesData) => {
      dispatch({ type: GET_MESSAGES, payload: messagesData.messages });
      console.log(messagesData.messages);
    });
  }, []);

  //  function GetLikes(props) {
  //    useEffect(() => {
  //      getLikes().then((likesData)=>{
  //      dispatch({ type: GET_LIKES, payload: likesData.likes });

  //      })
  //    }, []);
  //  }
  //  {
  //   "like"= {
  //     "id": 0,
  //     "username": "",
  //     "messageId": 0,
  //     "createdAt": ""
  //   },
  // };

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
              //  likes={props.likes}
            />
          ))}
      </ul>
    </section>
  );
}

export default MessageList;
