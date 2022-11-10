import { Cookies } from "react-cookie";

const cookies = new Cookies();
const expires = new Date();

expires.setDate(expires.getDate() + 1);

export const setCookie = (name, value) => {
  return cookies.set(name, value, {
    path: "/",
    expires,
  });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name);
};

export const getAllCookie = () => {
  return cookies.getAll();
};
