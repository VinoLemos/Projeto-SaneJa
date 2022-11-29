import axios from "axios";

const isLocal = window.location.href.match('localhost');

export default axios.create({
  baseURL: isLocal ? "/api" : "https://sanejaapi.azurewebsites.net",
});
