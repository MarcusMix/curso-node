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

//delete user
app.post("/users/delete/:id", async (req, res) => {
	const id = req.params.id;

	await User.destroy({ where: { id: id } });

	res.redirect("/");
});

//create user
app.get("/users/create", (req, res) => {
	res.render("adduser");
});

//find one user (detail)
app.get("/users/:id", async (req, res) => {
	const id = req.params.id;

	const user = await User.findOne({ raw: true, where: { id: id } });

	res.render("userview", { user });
});

//create user in db
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
	const users = await User.findAll({ raw: true });
	console.log(users);

	res.render("home", { users: users });
});

sequelize
	.sync()
	.then(() => {
		app.listen(3000);
	})
	.catch((error) => console.log(error));
