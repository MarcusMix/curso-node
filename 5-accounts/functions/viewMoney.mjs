//functions
import checkAccount from "./checkAccount.mjs";
import getAccount from "./getAccount.mjs";
import { operation } from "../index.mjs";

//modules
import inquirer from "inquirer";
import chalk from "chalk";

const viewMoney = () => {
	inquirer
		.prompt([
			{
				name: "accountName",
				message: "Qual o nome da sua conta?",
			},
		])
		.then((response) => {
			const accountName = response["accountName"];

			if (!checkAccount(accountName)) {
				return viewMoney();
			}

			const accountData = getAccount(accountName);

			if (accountData.balance === null) {
				accountData.balance = 0;
			}

			console.log(
				chalk.bgBlue(
					`Saldo total da sua conta é R$ ${accountData.balance}.`
				)
			);

			operation();
		})
		.catch((error) => console.log(error));
};

export default viewMoney