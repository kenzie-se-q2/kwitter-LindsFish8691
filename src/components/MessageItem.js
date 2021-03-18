
// TODO: create a MessageItem component which displays 1 message
// Message component with Id, Username, Date created, messageId, text type.
//Placement of timeStamp function & Likes function?
//create route to connect to message list 
// Do I call the dateCreated function 

import { render } from "@testing-library/react";

function MessageItem() {
    "message"= {
      "id": 0,
      "text": "",
      "username": "",
      "createdAt": "",
      "likes": [
        {
          "id": 0,
          "username": "",
          "messageId": 0,
          "createdAt": ""
        }
      ]
    },
   // "statusCode"= 0
    //Unsure if i need the above status code??...
    function likes(name) {
        if (name.length == 0) {
          return "Not a Fan"
        } else 
        if (name.length == 1) {
         return `${name[0]} likes this`
        } else if (name.length == 2) {
          return `${name[0]} and ${name[1]} like this`
        } else if (name.length == 3) {
          return`${name[0]}, ${name[1]} and ${name[2]} like this`
        } else if (name.length >= 4) {
          return `${name[0]}, ${name[1]} and ${name.length - 2} others like this`
        }
      };
      function createdAt(e) {
        let messageList= this.state.messageList;
        const timeStamp= Date.now(); 
     
        if(this.inputElement !== "") {
          messageList.unshift(
              {
                  text: this.inputElement.value,
                  key: Date.now()
              }
          );
          this.setState({      
             messages: messageList    
           });   
           this._inputElement.value = ""; 
        }
        console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric',
         month: '2-digit',day: '2-digit', hour: '2-digit',
          minute: '2-digit', second: '2-digit'}).format(timeStamp),messageList);   
        };
        e.preventDefault();

        render() {
         return(
             <div>
                 
             </div>
         )
        }
    }

    export default MessageItem;





