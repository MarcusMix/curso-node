//functions
import getAccount from "./getAccount.mjs";
import rescueMoney from "./rescueMoney.mjs";
import { operation } from "../index.mjs";

//modules
import fs from "fs";
import chalk from "chalk";

const removeAmount = (accountName, amount) => {
	const accountData = getAccount(accountName);

	if (!amount) {
		console.log(
			chalk.bgRed("Ocorreu um erro, tente novamennte mais tarde!")
		);

		return rescueMoney();
	}

	if (accountData.balance < amount) {
		console.log(chalk.bgRed("Valor indisponível! Tente novamente!"));

		return rescueMoney();
	}

	accountData.balance =
		parseFloat(accountData.balance) - parseFloat(amount);

	fs.writeFileSync(
		`accounts/${accountName}.json`,
		JSON.stringify(accountData),
		function (error) {
			console.log(error);
		}
	);

	console.log(
		chalk.bgGreenBright(
			`Sucesso! Foi realizado um saque de R$${amount} da sua conta!`
		)
	);

	operation();
};

export default removeAmount;