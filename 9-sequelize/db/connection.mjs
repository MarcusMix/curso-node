import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sequelize", "root", "", {
	host: "localhost",
	dialect: "mysql",
});

try {
	sequelize.authenticate();
	console.log("Conectamos com sucesso o Sequelize!");
} catch (error) {
	console.log("Não foi possível conectar:" + error);
}

export default sequelize;