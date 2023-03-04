//externos
import inquirer from "inquirer";
import chalk from "chalk";

//internos
import fs from "fs";

const operation = () => {
	inquirer
		.prompt([
			{
				type: "list",
				name: "action",
				message: "O que você deseja fazer?",
				choices: [
					"Criar Conta",
					"Consultar Saldo",
					"Sacar",
					"Sair",
				],
			},
		])
		.then((response) => {
			const action = response["action"];
			console.log(action);
		})
		.catch((error) => console.log(error));
};

operation();
