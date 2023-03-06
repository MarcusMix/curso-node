import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";
import { operation } from "../index.mjs";

const deleteAccount = () => {
	inquirer
		.prompt([
			{
				name: "accountName",
				message: "Digite o nome da conta que dejesa excluir!",
			},
		])
		.then((response) => {
			const accountName = response["accountName"];

			if (fs.existsSync(`accounts/${accountName}.json`)) {
				fs.unlink(
					`accounts/${accountName}.json`,
					function (error) {
						if (error) {
							console.log(
								"Ocorreu um erro ao excluir a conta!"
							);
							console.log(error);
							return operation();
						}
						console.log(
							chalk.bgCyanBright("Conta excluída!")
						);
						operation();
					}
				);
			}
		})
		.catch((error) => console.log(error));
};

export default deleteAccount;
