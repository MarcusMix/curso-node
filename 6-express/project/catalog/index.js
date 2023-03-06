const express = require("express");
const router = express.Router();
const path = require("path");

//caminho da pasta
const basePath = path.join(__dirname, "../templates");

router.get("/:id", (req, res) => {
	res.sendFile(`${basePath}/catalog.html`);
});

module.exports = router;
