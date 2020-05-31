const express = require("express");
const  Day  = require("../models/day");

const router = express.Router();

router.get("/", async(req, res)=>{
    const days = await Day.find();

    res.send(days);
});

router.post("/", async(req, res)=>{
    const day = new Day({
        dayName: req.body.dayName,
        tempRange : req.body.tempRange,
        sunRise : req.body.sunRise,
        sunSet : req.body.sunSet,
        wind : req.body.wind,
        humidity : req.body.humidity
    });

    await day.save();
    res.send(day)
});
module.exports = router