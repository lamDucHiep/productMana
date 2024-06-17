const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

const database = require("./config/database");
const mongoose = require("mongoose");
database.connect();
const routeClient = require("./routes/client/index.route");

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));

routeClient.index(app);

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
