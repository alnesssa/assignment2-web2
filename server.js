const express = require("express");
const app = express();
require("dotenv").config();

const { getUserData } = require("./core");

app.use(express.static("public"));
app.use(express.json());

app.get("/api/user", getUserData);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
