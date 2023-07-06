require("dotenv").config();

const axios = require("axios");
const url = "http://localhost:3000/deals";
const data = {
  title: "Number 4",
  value: 100,
  currency: "USD",
  status: "open",
  probability: 60,
};
axios
  .post(url, data, {})
  .then((response) => {
    console.log("Deal created:", response.data);
  })
  .catch((error) => {
    console.error("Error creating deal:", error.response.data);
  });
