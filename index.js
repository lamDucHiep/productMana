const express = require("express");
const app = express();
const port = 3000;
const routeClinet = require("./routes/client/index.route");

app.set("views", "./views");
app.set("view engine", "pug");

routeClinet.index(app);

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
