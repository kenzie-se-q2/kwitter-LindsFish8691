import React, { useState } from "react";
import { createUser } from "../../fetchRequests.js";
//import { useStore } from "../../store/store.js";
import PopUp from "./Popup.js";
import { Form, Button } from "react-bootstrap";

function Registration(props) {
  //const dispatch = useStore((state) => state.dispatch);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [userData, setUserdata] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(userData.username, userData.displayName, userData.password)
      .then(() => setButtonPopup(true))
      .catch(() => {
        alert("Username may already be taken");
        <PopUp>
          <h3>Please try again</h3>
        </PopUp>;
      });
  };
  const handleChange = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    setUserdata((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
            value={userData.username}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            name="displayName"
            type="text"
            placeholder="display name"
            value={userData.displayName}
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={userData.password}
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>{`Welcome ${userData.username}, to the forum.`}</h3>
      </PopUp>
    </div>
  );
}

export default Registration;
