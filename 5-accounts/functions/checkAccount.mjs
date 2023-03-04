import fs from "fs";
import chalk from "chalk";

const checkAccount = (accountName) => {
	if (!fs.existsSync(`accounts/${accountName}.json`)) {
		console.log(chalk.bgRed.black("Conta não exite!"));
		return false;
	}

	return true;
};

export default checkAccount;