import e from "express";

import ExpressHandlebars from "express-handlebars";

import sequelize from "./db/connection.mjs";

import { User } from "./models/User.mjs";
import { Adress } from "./models/Adress.mjs";

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

//add adress
app.post("/adress/create", async (req, res) => {
	const { UserId } = req.body;
	const { street } = req.body;
	const { country } = req.body;
	const { number } = req.body;
	const { city } = req.body;

	const adress = {
		UserId,
		street,
		country,
		number,
		city,
	};

	await Adress.create(adress)

	res.redirect(`/users/edit/${UserId}`)
});

//edit user
app.get("/users/edit/:id", async (req, res) => {
	const id = req.params.id;

	const user = await User.findOne({ raw: true, where: { id: id } });

	res.render("useredit", { user });
});

app.post("/users/update", async (req, res) => {
	const { id } = req.body;
	const { name } = req.body;
	const { occupation } = req.body;
	let { newsletter } = req.body;

	if (newsletter === "on") {
		newsletter = true;
	} else {
		newsletter = false;
	}

	const userData = {
		id,
		name,
		occupation,
		newsletter,
	};

	await User.update(userData, { where: { id: id } });

	res.redirect("/");
});

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
	// .sync({ force: true })
	.then(() => {
		app.listen(3000);
	})
	.catch((error) => console.log(error));
