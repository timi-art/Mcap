import react from "react";
import Axios from "axios";
import sha512 from '@cryptography/sha512';
import {API_URL} from '@env'
import { getItem } from "./helperFunctions/asyncStorage";
import moment from "moment";
import { sessionTimeout } from "./redux/allApps/slice/authSlice";

// const BASE_URL = API_URL
// const BASE_URL = "http://41.203.110.24:7780/OmniAPI"
const BASE_URL = "http://10.40.14.24/OmniAPI"




console.log(BASE_URL, "base url")

export const axiosNoAuth = Axios.create({
    baseURL: BASE_URL,
    headers: {
       "USERNAME": "testuser",
        "channel":  "mobile",
    }
})


export const createHeader = () => {

  const timestamp =  moment().utc().format().substr(0, 19).replace(/[^0-9]/g, '')
  const secretKey = "B4FAx259Xs2zua_o";
  const ivKey = "Nj5JvevLN50imUWZ";
  const username = "testuser";
  const apiKey = sha512(`${secretKey}:${ivKey}:${timestamp}:${username}`, 'hex')


  const header = {
    timestamp,
    apiKey
  }

  return header
}

// export const logoutTimer =  (dispatch,expiryTime) => {
//   const tokenTime = Date.parse(expiryTime)
//   const expiredTime = new Date(tokenTime - (1000 * 60 * 29))
//   let intervalId
//   intervalId = setInterval(() => {
//      const now = new Date()
//      console.log("logoutTimer", "now")
//      console.log(expiredTime, "token time",now)
//      if(now >= expiredTime){
//       dispatch(sessionTimeout())
//       return clearInterval(intervalId)
//      }
  
//   }, 1000 * 6)
// };
