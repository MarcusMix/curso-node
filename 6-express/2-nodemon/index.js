const express = require("express");
const app = express();
const port = 4000;

const path = require("path");

//caminho da pasta templates
const basePath = path.join(__dirname, "templates");

app.get("/", (req, res) => {
	res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
	console.log(`app rodando na porta ${port}`);
});
