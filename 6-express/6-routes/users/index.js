const express = require("express");
const router = express.Router();

//caminho da pasta templates
const path = require("path");
const basePath = path.join(__dirname, "../templates");

//mandando o formulario
router.get("/add", (req, res) => {
	res.sendFile(`${basePath}/userform.html`);
});

router.post("/save", (req, res) => {
	console.log(req.body);
	const name = req.body.name;
	const age = req.body.age;

	console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);
});

module.exports = router;
