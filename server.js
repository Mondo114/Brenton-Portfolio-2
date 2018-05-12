// http://localhost:3000

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true }));

app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.use("/", express.static("./"));

app.listen(PORT, function() {
  console.log("Portfolio is listening on PORT: " + PORT);
});
