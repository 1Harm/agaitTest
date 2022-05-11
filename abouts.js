const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.send(__dirname + "/views/about.html"))
    .post((req, res) => res.render(__dirname + "/views/about.html"));
module.exports = router;