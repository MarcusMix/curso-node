import e from "express";
import ExpressHandlebars from "express-handlebars";

import client from "./db/conn.mjs";

const app = e();

app.engine("handlebars", ExpressHandlebars.engine());
app.set("view engine", "handlebars");

app.use(
	e.urlencoded({
		extended: true,
	})
);

app.use(e.json());

app.listen(3000);
