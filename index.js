const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

const database = require("./config/database");
database.connect();
const mongoose = require("mongoose");
const routeClient = require("./routes/client/index.route");

app.set("views", "./views");
app.set("view engine", "pug");

routeClient.index(app);

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
