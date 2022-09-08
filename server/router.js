const express = require("express");

const router = express.Router();

// create Get request to root route
router.get("/", (req, res) => {
    // simply send message
    // to see server is running on localhost:4000
    res.send("server is up and running");
});

// after create route --> export
module.exports = router;
// require in index.js
