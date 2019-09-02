import axios from "axios";

// https://sisevent.herokuapp.com/api ; http://localhost:8800/api
export default axios.create({
  baseURL: "https://sisevent.herokuapp.com/api",
});