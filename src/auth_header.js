// Note: For Node.js Express back-end, please use x-access-token header like this
export default function authHeader() {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && token) {
    // for Node.js Express back-end
    return { "x-access-token": token };
  } else {
    return {};
  }
}
