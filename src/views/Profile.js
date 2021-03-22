// TODO: Create a Profile to display the current users information
// TODO: Create a Profile to display the current users information
import React, { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { getUser } from "../fetchRequests.js";

function Profile({ match }) {
  const [user, setUser] = useState({});

  const [about, setAbout] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [picture, setPicture] = useState("");

  // to get the user info
  useEffect(() => {
    getUser(match.params.username).then((data) => {
      setUser(data.user);
      setAbout(data.user.about);
      setCreatedAt(data.user.createdAt);
    });
  }, [match]);

  function fileSelectedHandler(event) {
    setPicture(picture.event);
  }

  function fileUploadHandler(event) {
    const [file] = event.target.files;
    if (file) {
      console.log(file);
    }
  }

  return (
    <Container className="Profile">
      <h1>{user.username}'s Profile</h1>
      <input type="file" onChange={fileSelectedHandler} />
      <input
        type="file"
        accept="image/*"
        onChange={fileUploadHandler}
        multiple="false"
      />

      <img src={fileSelectedHandler} alt="" />
      <br />

      <p>About Me:</p>
      <p>{user.about}</p>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={user.username}
            type="text"
            placeholder="My username"
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>About Me</Form.Label>
          <Form.Control
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            type="text"
            placeholder="About me..."
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Profile Created</Form.Label>
          <Form.Control
            value={createdAt}
            type="text"
            placeholder="Created..."
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Profile;
