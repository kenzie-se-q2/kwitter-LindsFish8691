// TODO: Create a Profile to display the current users information
// import React, { Component } from 'react';

import { useState } from "react";

function Profile() {
  const [picture, setPicture] = useState("");
  let messageInput = document.getElementById("message_input");

  function fileSelectedHandler(event) {
    setPicture(picture.event);
  }

  function fileUploadHandler() {}

  return (
    <div>
      <h1>My Profile</h1>
      <form style={{ display: "block", justifyContent: "center" }}>
        <input type="file" onChange={fileSelectedHandler} />
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
  );
}

export default Profile;
