const express = require("express");
const app = express();
const port = 4000;

const path = require("path");

const users = require('./users')

//transformando em código legível obj
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

//caminho da pasta templates
const basePath = path.join(__dirname, "templates");

app.use('/users', users)


app.get("/", (req, res) => {
	res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
	console.log(`app rodando na porta ${port}`);
});
