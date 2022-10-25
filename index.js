const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const app = express();

const doctorRoutes = require('./routes/doctors.js');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

function logger(req, res, next) {
    console.log("Request received at ", new Date());
    return next();
}

app.get("/", (req, res) => {
    res.send("For all those who love Doctor Who!");
})

app.use('/doctors', logger, doctorRoutes);

app.use((err,req,res,next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message || "Something went wrong");;
});

const server = app.listen(1688, () => console.log(`Server successfully started on port ${server.address().port}`));