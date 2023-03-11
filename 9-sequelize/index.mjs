import e from "express";

import ExpressHandlebars from "express-handlebars";

import sequelize from "./db/connection.mjs";

import { User } from "./models/User.mjs";

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

//create user
app.get("/users/create", (req, res) => {
	res.render("adduser");
});

app.post("/users/create", async (req, res) => {
	const { name } = req.body;
	const { occupation } = req.body;
	let { newsletter } = req.body;

	if (newsletter === "on") {
		newsletter = true;
	} else {
		newsletter = false;
	}

	await User.create({ name, occupation, newsletter });

	res.redirect("/");
});

//page
app.get("/", async (req, res) => {

	const users = await User.findAll({raw: true})
	console.log(users)

	res.render("home", {users: users});
});

sequelize
	.sync()
	.then(() => {
		app.listen(3000);
	})
	.catch((error) => console.log(error));
