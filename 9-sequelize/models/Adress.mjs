import sequelize from "../db/connection.mjs";
import { DataTypes } from "sequelize";
import { User } from "./User.mjs";

export const Adress = sequelize.define("Adress", {
	street: {
		type: DataTypes.STRING,
		required: true,
	},
	number: {
		type: DataTypes.STRING,
		required: true,
	},
	city: {
		type: DataTypes.STRING,
		required: true,
	},
	country: {
		type: DataTypes.STRING,
		required: false,
	},
});

Adress.belongsTo(User)