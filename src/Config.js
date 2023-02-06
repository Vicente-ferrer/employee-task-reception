import axios from "axios";
//I recommend you use your ip address instead of using localhost
const Axios = axios.create({
  baseURL: "Ponha seu localhost aqui, caso não funcione, ponha seu Ipv4",
});

export default Axios;
