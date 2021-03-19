import React, { useState } from "react";
import { createUser } from "../../fetchRequests.js";
//import { useStore } from "../../store/store.js";
import PopUp from "./Popup.js";

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
      .catch((e) => {
        alert("Username may already be taken");
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
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
      <form id="registration-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" autoFocus value={userData.username} required onChange={handleChange}></input>

        <label htmlFor="displayName">Display Name</label>
        <input type="text" name="displayName" autoFocus value={userData.displayName} required onChange={handleChange}></input>

        <label htmlFor="password">password</label>
        <input type="password" name="password" autoFocus value={userData.password} required onChange={handleChange}></input>

        <button>submit & open popup</button>
      </form>
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>{`Welcome ${userData.username}, to the blah blah page.`}</h3>
      </PopUp>
    </div>
  );
}

export default Registration;

// function createUser(username, displayName, password) {
//   fetch(baseURL + "users", {
//     method: "POST",
//     headers: { "Content-type": "application/json" },
//     body: JSON.stringify({
//       username,
//       displayName,
//       password,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
