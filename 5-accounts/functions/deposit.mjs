//functions
import checkAccount from "./checkAccount.mjs";
import addAmount from "./addAmount.mjs";
import { operation } from "../index.mjs";

//modules
import inquirer from "inquirer";
import chalk from "chalk";

const deposit = () => {
	inquirer
		.prompt([
			{
				name: "accountName",
				message: "Qual o nome da sua conta",
			},
		])
		.then((response) => {
			const accountName = response["accountName"];

			//verificar se a conta existe
			if (!checkAccount(accountName)) {
				return deposit();
			}

			inquirer
				.prompt([
					{
						name: "amount",
						message: "Qual a quantidade que você quer depositar?",
					},
				])
				.then((response) => {
					const amount = response["amount"];

					//adicionar dinheiro
					addAmount(accountName, amount);

					operation();
				})
				.catch((error) => console.log(error));
		})
		.catch((error) => console.log(error));
};

export default deposit;
