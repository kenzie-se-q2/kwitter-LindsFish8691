import React, { useEffect } from "react";
import MessageItem from "../components/MessageItem";

import { useStore, GET_MESSAGES, LIKES } from "../store/store";
import { getMessages, likeRequest } from "../fetchRequests";

function MessageList(props) {
  const dispatch = useStore((state) => state.dispatch);

  const likes = useStore((state) => state.likes);

  const store = useStore();

  function MessageList(props) {
    const dispatch = useStore((state) => state.dispatch);
    const store = useStore();

    useEffect(() => {
      getMessages().then((messagesData) => {
        dispatch({ type: GET_MESSAGES, payload: messagesData.messages });
        console.log(messagesData.messages);
      });
    }, []);

    const handleLikes = (e) => {
      e.preventDefault();
      likeRequest().then((likesData) => {
        dispatch({ type: LIKES, payload: likesData.likes });
        console.log(likesData.likes);
      });
    };

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
        <button className="Likes" onClick={handleLikes}>
          like
        </button>
      </section>
    );
  }
}

export default MessageList;
