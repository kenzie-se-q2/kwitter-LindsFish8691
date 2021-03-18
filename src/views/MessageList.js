import React, { useState, useEffect } from 'react';
import MessageItem from '../components/MessageItem';
import { useStore, GET_MESSAGES } from '../store/store';
import { getMessages } from '../fetchRequests';


 function MessageList(props) {
   const dispatch = useStore((state) => state.dispatch);
   const [messages, setMessages] = useState([]);
   useEffect(() => {
       getMessages().then((messagesData)=>{
         dispatch({ type: GET_MESSAGES, payload: messagesData });
       })
    
   }, [])
 
      console.log(messages);
      return (
          <section className="Messages">
          <ul className="MessageList">
         {messages.messages && messages.messages.map((message) => (
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
  )};
 
 
  export default MessageList;
 





