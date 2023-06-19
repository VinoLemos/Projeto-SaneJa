export let API_URL = "https://sanejabd.mysql.database.azure.com/api";

if (process.env.NODE_ENV === "development") {
  API_URL = "https://localhost:7021/api";
}