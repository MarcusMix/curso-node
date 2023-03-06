const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

//caminho
const basePath = path.join(__dirname, "templates");

//router
const catalogRoutes = require("./catalog");

//arquivos estáticos
app.use(express.static("public"));

//catalog
app.use("/catalog", catalogRoutes);

//index
app.get("/", (req, res) => {
	res.sendFile(`${basePath}/index.html`);
});


//escutando...
app.listen(port, () => {
	console.log(`app rodando na porta ${port}`);
});
