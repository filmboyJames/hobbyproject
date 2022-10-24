const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const doctorRoutes = require('./routes/doctor.js');

app.use(express.json());
app.use(bodyParser.json());

const logger = (req, res, next) => {
    console.log("Request received at ", new Date());
    return next();
}

