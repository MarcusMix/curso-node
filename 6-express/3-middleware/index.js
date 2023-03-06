const express = require("express");
const app = express();
const port = 4000;

const path = require("path");

//caminho da pasta templates
const basePath = path.join(__dirname, "templates");

const checkAuth = (req, res, next) => {
	req.authStatus = true;

	if (req.authStatus) {
		console.log("Está logado!");
		next();
	} else {
		console.log("Não está logado!");
	}
};

app.use(checkAuth);

app.get("/", (req, res) => {
	res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
	console.log(`app rodando na porta ${port}`);
});
