const express = require("express");
const exphbs = require("express-handlebars");
const port = 3000;

const app = express();

//config handlebars
const hbs = exphbs.create({
	partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//statics
app.use(express.static("public"));

//products
const products = [
	{
		id: 1,
		title: "Camisa 1",
		description: "Verde",
		comments: 55,
	},
	{
		id: 2,
		title: "Camisa 2",
		description: "Vermelha",
		comments: 522,
	},
	{
		id: 3,
		title: "Camisa 3",
		description: "Preta",
		comments: 5,
	},
];

//product url dinamic
app.get("/product/:id", (req, res) => {
	const product = products[parseInt(req.params.id) - 1];

	res.render("product", { product });
});

//home page
app.get("/", (req, res) => {
	res.render("home", { products });
});

app.listen(port, () => {
	console.log("App rodando na porta 3000...");
});
