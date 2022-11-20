import axios from "axios";
import { getCookie } from "./cookie";
import { APIURL } from "./key";

export const myAxios = axios.create({
  baseURL: APIURL,
  headers: {
    Authorization: "token " + getCookie("token"),
  },
});
