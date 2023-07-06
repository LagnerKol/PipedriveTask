require("dotenv").config();
const axios = require("axios");
const url = "http://localhost:3000/deals";
const data = {
  id: 2,
  title: "New Name for id 2 is potato",
  value: 100,
  currency: "USD",
  status: "open",
};
axios
  .put(url, data, {})
  .then((response) => {
    console.log("Deal created:", response.data);
  })
  .catch((error) => {
    console.error("Error updaring deal:", error.response.data);
  });
