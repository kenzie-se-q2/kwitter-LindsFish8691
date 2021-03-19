export const baseURL = "https://kwitter-api-b.herokuapp.com/";
export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};
export const logoutRequest = (token) => {
  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};
export const getMessages = () => {
  return fetch(baseURL + "messages").then((res) => res.json());
};
// export const getLikes = () => {
//   return fetch(baseURL + "likes", {
//     headers: {Authorization:  "Bearer " + token},
//   }).then((res) => res.json());
// };
export const userProfilePic = (username, password, token) => {
  return fetch(baseURL + `users/${username}/picture`, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => res.json())
    .then((user) => console.log(user));
};

export const createUser = async (username, displayName, password) => {
  const res = await fetch(baseURL + "users", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      username,
      displayName,
      password,
    }),
  });
  if (!res.ok) {
    throw new Error("bad response", res);
  }
  const res_1 = res;
  const data = await res_1.json();
  return console.log(data);
};

// export const createUser = (username, displayName, password) => {
//   return fetch(baseURL + "users", {
//     method: "POST",
//     headers: { "Content-type": "application/json" },
//     body: JSON.stringify({
//       username,
//       displayName,
//       password,
//     }),
//   })
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("bad response", res);
//       }
//       return res;
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

