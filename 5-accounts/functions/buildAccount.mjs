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

			inquirer
				.prompt([
					{
						name: "CPF",
						message: "Qual seu CPF",
					},
				])
				.then((response) => {
					const cpfAccount = response["CPF"];
					console.log(cpfAccount);

					fs.writeFileSync(
						`accounts/${accountName}.json`,
						`{
							"balance":0, 
							"cpf": ${cpfAccount}
						}`,
						function (error) {
							console.log(error);
						}
					);

					console.log(
						chalk.bgGreen.white(
							"Conta criada com sucesso!"
						)
					);
					operation();
				})
				.catch((error) => console.log(error));
		})
		.catch((error) => console.log(error));
};

export default buildAccount;
