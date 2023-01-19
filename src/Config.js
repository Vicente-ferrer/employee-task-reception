import axios from "axios";

const Axios = axios.create({
  baseURL: "http://192.168.0.6:8080/employee",
});

export default Axios;
