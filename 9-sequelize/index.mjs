import e from "express";

import ExpressHandlebars from "express-handlebars";

import sequelize from "./db/connection.mjs";

const app = e();

//pegar os dados do body
app.use(
	e.urlencoded({
		extended: true,
	})
);

app.use(e.json());

//statics
app.use(e.static("public"));

//handlebars setup
app.engine("handlebars", ExpressHandlebars.engine());
app.set("view engine", "handlebars");

//page
app.get("/", (req, res) => {
	res.render("home");
});

app.listen(3000);
