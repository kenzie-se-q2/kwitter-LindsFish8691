import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/store";
import { logoutRequest } from "../fetchRequests";
import { Navbar, Nav, Button } from "react-bootstrap";

function Menu(props) {
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);

  const logout = (e) => {
    logoutRequest(user.token).then(() => dispatch({ type: "LOGOUT" }));
    window.localStorage.clear();
  };
  return (
    // <div id="menu">
    //   <h1>Kwitter</h1>
    //   <div id="menu-links">
    //     <Link to="/messages">Messages</Link>

    //     <div id="profile-links">
    //       <Link to="/profile">Profile</Link>
    //     </div>
    // {user.token && <button onClick={logout}>Logout</button>}
    //   </div>
    // </div>
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/messages">Messages</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/profile">Profile</Link>
            </Nav.Link>
          </Nav>
          {/* <Nav> */}
          {user.token && (
            <Button variant="warning" onClick={logout}>
              Logout
            </Button>
          )}

          {/* {user.token && <button onClick={logout}>Logout</button>} */}
          {/* </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
//line 23 user.token &&
