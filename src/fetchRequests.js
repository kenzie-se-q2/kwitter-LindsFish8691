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

export const userProfilePic = (username, token, pictureData) => {
  let formData = new FormData();
  formData.append("picture", pictureData);
  return fetch(baseURL + `users/${username}/picture`, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });
};
export const likeRequest = (token, messageId) => {
  return fetch(baseURL + "likes", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messageId,
    }),
  }).then((res) => res.json());
};

export const unlike = (token, id) => {
  return fetch(`${baseURL}likes/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    Body: JSON.stringify({ id }),
  }).then((res) => res.json());
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

export const getUserList = () => {
  return fetch(baseURL + "users").then((res) => res.json());
};

export const getUser = (username) => {
  return fetch(baseURL + `users/${username}`).then((res) => res.json());
};

export const postMessage = (token, text) => {
  return fetch(baseURL + "messages", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
    }),
  }).then((res) => res.json());
};

/*
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
*/
/*
export const getUser = (username) => {
  return fetch(baseURL + `users/${username}`).then((res) => res.json());
};
*/
export const patchUser = (token, username, newUserInfo) => {
  return fetch(baseURL + `users/${username}`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserInfo),
  }).then((res) => res.json());
};
