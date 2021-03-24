import React, { useState } from 'react';
import {postMessage} from '../../fetchRequests.js';
import {POST_MESSAGE, useStore} from '../../store/store.js';


const PostMessage = (props) => {
   let user = useStore((state) => state.user)
   const [formData, setFormData] = useState({
    text: ""
  });
  
  const handleChange = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };
  
  
  const handlePostMessage = (e) => {
     e.preventDefault();
      postMessage(user.token, formData.text).then((postMessageData) => {
        dispatch({ type: POST_MESSAGE, payload: postMessageData.postMessage }), 
        fetchComments().then(() => setButtonPopup())
      .catch(() => {
        alert("Posting New Message");
        <PopUp>
          <h3>Message Posted</h3>
        </PopUp>;
         });
        })} 
     
      
      return (
        <div>
            <form id="PostMessage" onSubmit={handleSubmit}></form>
            <label>Post Message</label>
        <input type="text" name="username" autoFocus value={postMessage.username} required onChange={handleChange}></input>
        
        </div>
    )
}
     
   // use Aux tag or react fragment instead of div tags ^^^^
 
 export default PostMessage;
       
       

