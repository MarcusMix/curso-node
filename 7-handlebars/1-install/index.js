const express = require("express");
const exphbs = require("express-handlebars");

const app = express();


//config express
app.use(express.static('public')) //arquivos estaticos -> estilos, imagens etc...

//config handlebars
const hbs = exphbs.create({
	partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//membros page
app.get("/membros", (req, res) => {
	const items = ["a", "b", "c"];
	res.render("membros", { items });
});

//post page
app.get("/post", (req, res) => {
	const postData = {
		title: "Handlebars parece React",
		description: "Verdade ele tem as...",
		comments: 55,
	};

	res.render("post", { postData });
});

//blog page
app.get("/blog", (req, res) => {
	const posts = [
		{
			title: "Produtos legais",
			category: "roupas e calcados",
			body: "...",
			comments: 9,
		},
		{
			title: "Produtos chatos",
			category: "cuecas e calcinhas",
			body: "...",
			comments: 3,
		},
		{
			title: "Produtos normais",
			category: "botas e gravatas",
			body: "...",
			comments: 1,
		},
	];

	res.render("blog", { posts });
});

//homepage
app.get("/", (req, res) => {
	const user = {
		name: "Marcus",
		surname: "Sandi",
	};

	const dado = "um dado qualquer";
	const auth = true;

	res.render("home", { user: user, dado, auth });
});

app.listen(3000, () => {
	console.log("app rodando...");
});
