//setup inicial
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
	res.send("essa mensagem será enviada para o usuário!");
});

app.listen(port, () => {
	console.log(`App rodando na porta ${port}`);
});