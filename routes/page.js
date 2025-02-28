const express = require("express");
const path = require("path");

const router = express.Router();

// Home Page
router.get("/home", (req, res) => {
	res.sendFile(path.join(__dirname, "../views/home.html"));
});

// services Page
router.get("/services", (req, res) => {
	res.sendFile(path.join(__dirname, "../views/services.html"));
});

// contact Page
router.get("/contact", (req, res) => {
	res.sendFile(path.join(__dirname, "../views/contact.html"));
});

module.exports = router;