import axios from "axios";

export default axios.create({
  baseURL: "https://sisevent.herokuapp.com/api",
});