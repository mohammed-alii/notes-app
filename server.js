// server setup
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var coreJS = require("core-js");
var notesRoute = require('./route/notesRoute') 

const app = express();
const port = 3200;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`Notes App Started...`);
});

app.use('/api',notesRoute)

app.listen(port);


