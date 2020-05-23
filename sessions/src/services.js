const URL_BASE = "https://api-medium.mybluemix.net/";

function LogIn(data, callback) {
  const URL = `${URL_BASE}auth/login`;
  fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
    mode: "cors",
  })
    .then(response => response.json())
    .then(data => {
      callback(data)
    });
}

export { LogIn };
