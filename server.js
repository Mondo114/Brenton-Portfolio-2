// http://localhost:3000

const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

var PORT = process.env.PORT || 3000;

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: "application/*+json"}));
app.use(bodyParser.raw({type: "application/vnd.custom-type"}));
app.use(bodyParser.text({type: "text/html"}));

app.use("/", express.static("./"));

app.listen(PORT, function () {
  console.log("Portfolio is listening on PORT: " + PORT);
});