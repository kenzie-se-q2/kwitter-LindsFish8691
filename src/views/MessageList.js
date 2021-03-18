import React, { useState, useEffect } from 'react';
import MessageItem from '../components/MessageItem';
import { useStore, GET_MESSAGES } from '../store/store';
import { getMessages } from '../fetchRequests';


 function MessageList() {

  const dispatch = useStore((state) => state.dispatch);
  const [messages, setMessages] = useState(initialState)

  const handleMessages = (e) => {
    e.preventDefault();
    MessagesRequest(messageData.id, messageData.text, messageData.username,
   messageData.createdAt, messageData.likes)
  .then((message) =>
      dispatch({ type: GET_MESSAGES, payload: messageData })
    );
  };

     return (
         <section className="Messages">
         <ul className="MessageList">
        {props.messages.map((message) => (
            <MessageItem 
            id={message.id}
            text={message.text}
            username={message.username}
            dateCreated={props.dateCreated}
            likes={props.likes}
            />
            ))}
      </ul>
    </section>
 )};



export default MessageList;


// TODO: Create a MessageList to display messages
 //Example message from Api endpoints
 // Where to implement return?
// conversion to json needed?

