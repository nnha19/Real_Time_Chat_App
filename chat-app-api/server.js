const express = require("express");

const app = express();
const http = require("http");
const server = http.createServer(app);
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./routes/userRoute");

app.use("/user", userRoute);

mongoose
  .connect(process.env.CONNECT_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log(err));

server.listen(5000, function () {
  console.log("Server has started.");
});
