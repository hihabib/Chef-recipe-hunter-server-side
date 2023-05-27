const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const app = express();
const path = require("path");
global.appRoot = path.resolve(__dirname);
// middleware
app.use(express.json());
app.use(cors());
// routes
app.use(routes);

// listen app
app.listen(3800, () => {
  console.log("App is running");
});
