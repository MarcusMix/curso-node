//externos
import inquirer from "inquirer";

//functions
import createAccount from "./functions/createAccount.mjs";
import buildAccount from "./functions/buildAccount.mjs";
import rescueMoney from "./functions/rescueMoney.mjs";
import exitProgram from "./functions/exitProgram.mjs";
import deposit from "./functions/deposit.mjs";
import viewMoney from "./functions/viewMoney.mjs";

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