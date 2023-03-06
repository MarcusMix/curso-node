const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
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

//homepage
app.get("/", (req, res) => {
	const user = {
		name: "Marcus",
		surname: "Sandi",
	};

	const dado = "um dado qualquer";

	//exmplo de autenticação
	const auth = true;
	res.render("home", { user: user, dado, auth });
});

app.listen(3000, () => {
	console.log("app rodando...");
});
