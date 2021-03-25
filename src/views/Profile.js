// TODO: Create a Profile to display the current users information
// TODO: Create a Profile to display the current users information
import React, { useEffect } from "react";
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useStore } from "../store/store";
import { getUser, patchUser, userProfilePic, getProfilePic } from "../fetchRequests.js";
import Menu from "../components/Menu";

function Profile({ match }) {
  let baseURL2 = "https://socialapp-api.herokuapp.com";
  const authUser = useStore((state) => state.user);
  const [user, setUser] = useState({});
  const [displayName, setDisplayName] = useState("");
  const [about, setAbout] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [picture, setPicture] = useState("");
  const [success, setSuccess] = useState(true);


  // to get the user info
  useEffect(() => {
    getUser(match.params.username).then((data) => {
      setUser(data.user);
      setDisplayName(data.user.displayName);
      setAbout(data.user.about);
      setCreatedAt(data.user.createdAt);
    });
  }, [success]);
  
  function fileUploadHandler(event) {
    userProfilePic(authUser.username, authUser.token, picture).then((res) => {
      setSuccess((state)=> !state)
      console.log(res)});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUserInfo = {
      about,
      displayName,
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

  // const picSource = getProfilePic(match.params.username);
  console.log(user);

  return (
    <div>
      <Menu />

      <Container className="Profile">
        <h1>{authUser.username}'s Profile</h1>

        <input type="file" onChange={(event) => setPicture(event.target.files[0])} />

        <button onClick={fileUploadHandler}>Upload</button>
        <img src={baseURL2 + user.pictureLocation} />

        <p>About Me:</p>
        <p>{authUser.about}</p>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Display Name</Form.Label>
            <Form.Control onChange={(e) => setDisplayName(e.target.value)} value={displayName} type="text" placeholder="My displayname" />
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
