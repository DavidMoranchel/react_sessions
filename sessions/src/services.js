const URL_BASE = "https://api-medium.mybluemix.net/";

function LogIn(data) {
  const URL = `${URL_BASE}auth/login`;
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
  })
}

function GetPosts(token) {
  const URL = `${URL_BASE}posts`;
  return fetch(URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": token
    },
    mode: "cors",
  })
}

function GetPost(token, id) {
  const URL = `${URL_BASE}posts/${id}`;
  return fetch(URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "Authorization": token
    },
    mode: "cors",
  })
}

export { LogIn, GetPosts, GetPost };
