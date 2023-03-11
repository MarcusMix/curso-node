import { DataTypes } from "sequelize";
import sequelize from "../db/connection.mjs";

export const User = sequelize.define("User", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	occupation: {
		type: DataTypes.STRING,
		required: true,
	},
	newsletter: {
		type: DataTypes.BOOLEAN,
	},
});
