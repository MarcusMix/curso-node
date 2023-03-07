const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
	res.render("home");
});

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "admin",
	database: "dbteste",
});

connection.connect(function (error) {
	if (error) {
		console.log(error);
	}

	console.log("Conectou com o MySQL!");

	app.listen(3000);
});
