//function
import getAccount from "./getAccount.mjs";

//modules
import fs from "fs";
import chalk from "chalk";

const addAmount = (accountName, amount) => {
	const accountData = getAccount(accountName);

	if (!amount) {
		console.log(chalk.bgRed.black("\nOcorreu um erro!"));
		return deposit();
	}

	accountData.balance =
		parseFloat(amount) + parseFloat(accountData.balance);

	fs.writeFileSync(
		`accounts/${accountName}.json`,
		JSON.stringify(accountData),
		function (error) {
			console.log(error);
		}
	);

	console.log(
		chalk.green(`\nFoi depositado o valor de R$${amount} na sua conta!`)
	);
};

export default addAmount;
