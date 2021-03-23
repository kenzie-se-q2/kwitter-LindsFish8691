// TODO: Create a Profile to display the current users information
// TODO: Create a Profile to display the current users information
import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useStore } from "../store/store";
import { getUser, patchUser, userProfilePic } from "../fetchRequests.js";

function Profile({ match }) {
  let baseURL2 = "https://socialapp-api.herokuapp.com";
  const authUser = useStore((state) => state.user);
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [picture, setPicture] = useState("");

  // to get the user info
  useEffect(() => {
    getUser(match.params.username).then((data) => {
      setUser(data.user);
      setUsername(data.user.username);
      setAbout(data.user.about);
      setCreatedAt(data.user.createdAt);
    });
  }, [match]);
  /*
  function fileSelectedHandler(event) {
    setPicture(picture.event);
  }
*/
  function fileUploadHandler(event) {
    userProfilePic(authUser.token, authUser.username, picture).then((res) =>
      console.log(res)
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUserInfo = {
      about,
      username,
    };
    patchUser(authUser.token, user, newUserInfo).then((data) => {
      setUser(data.user);
    });
  }

  return (
    <Container className="Profile">
      <h1>{username}'s Profile</h1>

      <input
        type="file"
        onChange={(event) => setPicture(event.target.files[0])}
      />

      <button onClick={fileUploadHandler}>Upload</button>
      <img src={baseURL2 + user.pictureLocation} />

      <p>About Me:</p>
      <p>{about}</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
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
