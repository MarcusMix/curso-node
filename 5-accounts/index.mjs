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

import getAccount from "./functions/getAccount.mjs";
import deposit from "./functions/deposit.mjs";

export const operation = () => {
	inquirer
		.prompt([
			{
				type: "list",
				name: "action",
				message: "O que você deseja fazer?",
				choices: [
					"Criar Conta",
					"Depositar",
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
			} else if (action === "Depositar") {
				deposit();
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

//depositar


//consultar saldo
const viewMoney = () => {};