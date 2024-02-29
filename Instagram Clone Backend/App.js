const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const monogUrl = require("./keys");

app.use(cors());
require("./models/model");
app.use(express.json()); //converts the incoming req to json format
app.use(require("./routes/Auth"));

const PORT = 5000;
mongoose.connect(monogUrl);
mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});
mongoose.connection.on("error", () => {
  console.log("Connection failed to MongoDB");
});
app.listen(PORT, () => {
  console.log("Server is running at PORT " + PORT);
});
