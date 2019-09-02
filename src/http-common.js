import axios from "axios";

// https://sisevent.herokuapp.com/api
export default axios.create({
  baseURL: "http://localhost:8800/api",
});