const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const bodyParser = require("bod-parser");

connectDB();

app.use(bodyParser.json());

const port = process.env.PORT || 3001;

const app = express();

app.listen(port, () => console.log(`Server started on port ${port}`));
