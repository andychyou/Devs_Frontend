import axios from "axios"

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

export const APIURL = 'http://devs-backend-dahyen0o.koyeb.app'