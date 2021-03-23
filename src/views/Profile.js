// TODO: Create a Profile to display the current users information
// TODO: Create a Profile to display the current users information
import React, { useEffect } from "react";

import { useState } from "react";
import Menu from "../components/Menu";

function Profile() {
  const baseURL = "http://kwitter-api-b.herokuapp.com";

  const [picture, setPicture] = useState("");

  function fileSelectedHandler(event) {
    setPicture(picture.event);
  }

  function fileUploadHandler(event) {
    const [file] = event.target.files;
    if (file) {
      console.log(file);
    }
  }

  useEffect(()=>{
    console.log(window.localStorage)
    if(!window.localStorage.user){
      window.location.href = "/"
    }
  },[])

  return (
    <div>
      <Menu />
    <div className="Profile">
      
      <h1>My Profile</h1>
      <form style={{ display: "block", justifyContent: "center" }}>
        <input type="file" onChange={fileSelectedHandler} />
        <input
          type="file"
          accept="image/*"
          onChange={fileUploadHandler}
          multiple="false"
        />

        <img src={fileSelectedHandler} />
        <br />

        <label>Username</label>
        <input type="text" />
        <label style={{ display: "block" }}>About Me:</label>
        <textarea
          id="message_input"
          type="textarea"
          style={{ display: "block" }}
        ></textarea>
        <button>Submit</button>
        <br />
        <label>Profile created:</label>
      </form>
    </div>
    </div>
  );
}

export default Profile;
