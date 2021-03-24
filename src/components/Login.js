import React, { useState } from "react";
import { loginRequest } from "../fetchRequests";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import { LOGIN, useStore } from "../store/store";

function Login(props) {
  const dispatch = useStore((state) => state.dispatch);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const user = useStore((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();

    loginRequest(formData.username, formData.password).then((userData) => {
      dispatch({ type: LOGIN, payload: userData });
      window.localStorage.setItem("user", JSON.stringify(userData));
    });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };

  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="username"
            value={formData.username}
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
            value={formData.password}
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br></br>
        <div>{user.message ? user.message : ""}</div>
        <br></br>
        <label>
          New User?
          <Link to="/registration">Click here!</Link>
        </label>
      </Form>
    </>
  );
}

export default Login;
