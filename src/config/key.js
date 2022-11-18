import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

// export const APIURL = 'https://devs-backend-dahyen0o.koyeb.app'
export const APIURL = "https://devs-tory.herokuapp.com";
