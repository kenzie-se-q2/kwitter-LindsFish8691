import React from 'react'
import { useStore, LIKES } from "../store/store";
import { likeRequest } from "../fetchRequests";

function MessageItem(props) {
  const dispatch = useStore((state) => state.dispatch);
  const likes = useStore((state) => state.likes);

  const handleLikes = (e) => {
    e.preventDefault();
    likeRequest().then((likesData) => {
      dispatch({ type: LIKES, payload: likesData.likes });
      console.log(likesData.likes);
    });
  };
  return (
    <div>
      {props.username},{props.text},{props.id},{props.createdAt} 
      <button className="Likes" onClick={handleLikes}>
          like
        </button>
    </div>
  );
}

export default MessageItem;
