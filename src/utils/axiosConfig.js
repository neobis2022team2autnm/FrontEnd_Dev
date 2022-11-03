//import dependencies
import axios from "axios";

//It's base url
const URL = "https://s-trip.herokuapp.com/users";

export const API = axios.create({
  baseUrl: URL,
  headers: {
    ContentType: "application/json",
  },
});
