import axios from "axios";

export const getLoggedInUser = (auth) => {
  const userStr = localStorage.getItem(auth);
  if (!userStr) return null;
  return JSON.parse(userStr);
}

export const authToken = async (auth) => {
  if (!getLoggedInUser(auth)) return null;
  let tokenAuth = true;
  // await axios.get('/sanctum/csrf-cookie').then(response => {
  // await axios.get(`/api/token-check`).then(res => tokenAuth = true ).catch(err => {tokenAuth = false;localStorage.removeItem(auth)});
  await axios.get(`/api/token-check`).then(res => {tokenAuth = true;console.log(res.data);} ).catch(err => {tokenAuth = false;localStorage.removeItem(auth)});
  return tokenAuth;
}
