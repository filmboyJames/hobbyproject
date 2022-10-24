const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/doctors",{
    useNewUrlParser: true
}).then(() => console.log("Connected to MongoDB Doctors Database")).catch(err =>console.error(err));

const doctorSchema = new mongoose.Schema({
    number: {
        type: String,
        require: true
    },
    companions: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    startYear: {
        type: Number,
        require: true
    },
    endYear: {
        type: Number
    },
})

const doctorModel = mongoose.model("doctor", doctorSchema);

module.exports = {
    doctorModel
}