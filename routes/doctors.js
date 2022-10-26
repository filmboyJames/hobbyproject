const router = require('express').Router();
const { doctorModel } = require("../db");

router.post("/createDoctor", async (req, res, next) => {
    try { 
        const result = await doctorModel.create(req.body);
        res.status(201).send(result);
    } catch (err) { 
        return next(err);
    }
});

router.get("/getAll", (req, res) => doctorModel.find({}).then(results => res.send(results)).catch(err => next(err)));

router.get("/getDoctorByName/:id", (req, res, next) => doctorModel.find({ 'name': req.params.id }).then(results => res.send(results)).catch(err => next(err)));

router.patch("/updateDoctorById/:oldDoctorId", async (req, res, next) => {
    if(0) return next({status:400, message: "Doctor does not exist to update"});
    try{
        const result = await doctorModel.findByIdAndUpdate(req.params.oldDoctorId, req.body, {upsert: true})
        res.send(result);
    } catch(err) {
        return next(err);
    }

});

router.delete("/removeDoctorByName/:id", (req, res, next) => doctorModel.deleteOne({ 'name': req.params.id }).then(results => res.status(201).send(results)).catch(err => next(err)));

router.delete("/removeAllDoctors", (req, res, next) => doctorModel.deleteMany().then(results => res.status(201).send(results)).catch(err => next(err)));

//Add in a PUT command?

module.exports = router;