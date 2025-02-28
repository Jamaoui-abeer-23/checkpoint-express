const express = require("express");
const path = require("path");

const router = express.Router();

// Home Page
router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../views/Home.html"));
});

// services Page
router.get("/services", (req, res) => {
	res.sendFile(path.join(__dirname, "../views/Services.html"));
});

// contact Page
router.get("/contact", (req, res) => {
	res.sendFile(path.join(__dirname, "../views/Contact.html"));
});

module.exports = router;