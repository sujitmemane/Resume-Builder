const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const user = require("./routes/main");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(user);

app.listen(4000, () => {
  console.log("I am Listening");
});
