const express = require("express");
const router = express.Router();

const getData = require('../createMessage');

router.get("/", (req, res) => {
    const responseText = 'Welcome Traveler\nWho are you? How are you feeling today?';
    res.json(responseText);
});

router.post("/", (req, res) => {
    const info = req.body;
    console.log(info);
    res.json(getData(info.name, info.mood));
    //res.json(info);
});

module.exports = router;