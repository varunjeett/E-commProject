import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-buncholunch-89ce8.cloudfunctions.net/api"
  // baseURL: "http://localhost:5001/buncholunch-89ce8/us-central1/api", // the cloud function url
});

export default instance;
