const express = require("express");
const app = express();
const port = 4000;

const path = require("path");

//transformando em código legível obj
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

//caminho da pasta templates
const basePath = path.join(__dirname, "templates");

//mandando o formulario
app.get("/users/add", (req, res) => {
	res.sendFile(`${basePath}/userform.html`);
});

app.post("/users/save", (req, res) => {
	console.log(req.body);
	const name = req.body.name;
	const age = req.body.age;

	console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);
});

app.get("/", (req, res) => {
	res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
	console.log(`app rodando na porta ${port}`);
});
