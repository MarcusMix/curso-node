const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

//pegar os dados do body
app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

//statics
app.use(express.static("public"));

//handlebars setup
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//delete book
app.post("/books/remove/:id", (req, res) => {
	const id = req.params.id;
	const query = `DELETE FROM books WHERE id = ${id}`;

	connection.query(query, (error) => {
		if (error) {
			console.log(error);
			return;
		}

		res.redirect("/books");
	});
});

//edit book
app.get("/books/edit/:id", (req, res) => {
	const id = req.params.id;
	const query = `SELECT * FROM books WHERE id = ${id}`;

	connection.query(query, (error, data) => {
		if (error) {
			console.log(error);
			return;
		}

		const book = data[0];

		res.render("editbook", { book });
	});
});

//update book
app.post("/books/updatebooks", (req, res) => {
	const { id } = req.body;
	const { title } = req.body;
	const { pages } = req.body;

	const query = `UPDATE books SET title = '${title}', pages = '${pages}' WHERE id = ${id}`;

	connection.query(query, (error, data) => {
		if (error) {
			console.log(error);
			return;
		}

		res.redirect("/books");
	});
});

//books page POST
app.post("/books/insertbook", (req, res) => {
	const title = req.body.title;
	const pages = req.body.pages;

	const query = `INSERT INTO books (title, pages) VALUES (?)`;
	const values = [title, pages];

	connection.query(query, [values], (error) => {
		if (error) {
			console.log(error);
		}

		res.redirect("books");
	});
});

//pegar livros
app.get("/books", (req, res) => {
	const query = "SELECT * FROM books";

	connection.query(query, (error, data) => {
		if (error) {
			console.log(error);
			return;
		}

		const books = data;

		res.render("books", { books });
	});
});

//pegar livro específico
app.get("/books/:id", (req, res) => {
	const id = req.params.id;
	const query = `SELECT * FROM books WHERE id = ${id}`;

	connection.query(query, (error, data) => {
		if (error) {
			console.log(error);
			return;
		}

		const book = data[0];

		res.render("book", { book });
	});
});

//page
app.get("/", (req, res) => {
	res.render("home");
});

//get connection with mysql
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "dbteste",
	waitForConnection: true,
});

connection.connect((error) => {
	if (error) {
		console.log(error);
	}

	console.log("Conectou com o MySQL!");

	app.listen(3000);
});
