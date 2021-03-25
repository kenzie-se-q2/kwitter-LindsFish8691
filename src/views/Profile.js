// TODO: Create a Profile to display the current users information
// TODO: Create a Profile to display the current users information
import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useStore } from "../store/store";
import { getUser, patchUser, userProfilePic, getProfilePic } from "../fetchRequests.js";
import Menu from "../components/Menu";

function Profile({ match }) {
  let baseURL2 = "https://socialapp-api.herokuapp.com/";
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
    // getProfilePic(match.params.username).then((data) => {
    //   setPicture(data.picture);
    // });
  }, []);
  /*
  function fileSelectedHandler(event) {
    setPicture(picture.event);
  }
*/
  function fileUploadHandler(event) {
    userProfilePic(authUser.username, authUser.token, picture).then((res) => console.log(res));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUserInfo = {
      about,
      username,
    };
    patchUser(authUser.token, authUser.username, newUserInfo).then((data) => {
      console.log(data);
      setUser(data.user);
    });
  }

  useEffect(() => {
    console.log(window.localStorage);
    if (!window.localStorage.user) {
      window.location.href = "/";
    }
  }, []);

  const picSource = getProfilePic(match.params.username);
  console.log(user);

  return (
    <div>
      <Menu />

      <Container className="Profile">
        <h1>{authUser.username}'s Profile</h1>

        <input type="file" onChange={(event) => setPicture(event.target.files[0])} />

        <button onClick={fileUploadHandler}>Upload</button>
        <img src={""} />

        <p>About Me:</p>
        <p>{authUser.about}</p>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="My username" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>About Me</Form.Label>
            <Form.Control onChange={(e) => setAbout(e.target.value)} value={about} type="text" placeholder="About me..." />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Profile Created</Form.Label>
            <Form.Control value={createdAt} type="text" placeholder="Created..." />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Profile;
