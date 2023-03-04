//externos
import inquirer from "inquirer";
import chalk from "chalk";

//internos
import fs from "fs";

//functions
import createAccount from "./functions/createAccount.mjs";
import buildAccount from "./functions/buildAccount.mjs";
import rescueMoney from "./functions/rescueMoney.mjs";
import exitProgram from "./functions/exitProgram.mjs";

export const operation = () => {
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
			if (action === "Criar Conta") {
				createAccount();
				buildAccount();
			} else if (action === "Consultar Saldo") {
				viewMoney();
			} else if (action === "Sacar") {
				rescueMoney();
			} else if (action === "Sair") {
				exitProgram();
			}
		})
		.catch((error) => console.log(error));
};

operation();

//consultar saldo
const viewMoney = () => {};