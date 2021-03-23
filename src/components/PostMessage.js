import React from 'react'
import {POST_MESSAGE, useStore} from '../store/store'
import {postMessage} from '../fetchRequests'



const PostMessage = () => {
   const user = useStore((state) => state.user)
   const [formData, setFormData] = useState({
    text: ""
  });
    const handlePostMessage = (e) => {
        e.preventDefault();
        postMessage(user.token, formData.text).then((postMessageData) => {
         console.log(postMessageData);
          dispatch({ type: POST_MESSAGE, payload: postMessageData.postMessage });
    
        });
      }
      const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setFormData((state) => ({ ...state, [inputName]: inputValue }));
      };
    return (
        <div>
            
        </div>
    )
}

export default PostMessage



