// Note: For Node.js Express back-end, please use x-access-token header like this
export default function authHeader() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (token) {
    // for Node.js Express back-end
    // console.log(token)
    return { "x-access-token": token };
  } else {
    return {};
  }
}
