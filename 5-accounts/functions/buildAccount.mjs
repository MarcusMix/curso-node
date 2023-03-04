//externos
import inquirer from "inquirer";
import chalk from "chalk";

//internos
import fs from "fs";

import { operation } from "../index.mjs";

const buildAccount = () => {
	inquirer
		.prompt([
			{
				name: "accountName",
				message: "Digite um nome para a sua conta: ",
			},
		])
		.then((response) => {
			const accountName = response["accountName"];
			console.info(accountName);

			if (!fs.existsSync("accounts")) {
				fs.mkdirSync("accounts");
			}

			if (fs.existsSync(`accounts/${accountName}.json`)) {
				console.log(
					chalk.bgRed.black(
						"Essa conta já existe, escolha outro nome!"
					)
				);
				buildAccount();
				return;
			}

			fs.writeFileSync(
				`accounts/${accountName}.json`,
				'{"balance":0}',
				function (error) {
					console.log(error);
				}
			);

			console.log(chalk.bgGreen.white("Conta criada com sucesso!"));
			operation();
		})
		.catch((error) => console.log(error));
};

export default buildAccount