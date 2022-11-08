//import dependencies
import axios from "axios";

//It's base url
const URL = "http://34.159.147.205/users";


export const API = axios.create({
  baseUrl: URL,
  headers: {
    ContentType: "application/json",
  },
});
