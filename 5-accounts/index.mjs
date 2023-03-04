//externos
import inquirer from "inquirer";
import chalk from "chalk";

//internos
import fs from "fs";

const operation = () => {
	inquirer
		.prompt([
			{
				type: "list",
				name: "action",
				message: "O que você deseja fazer?",
				choices: [
					"Criar Conta",
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
			}
			if (action === "Consultar Saldo") {
				viewMoney();
			}
			if (action === "Sacar") {
				rescueMoney();
			}
			if (action === "Sair") {
				exitProgram();
			}
		})
		.catch((error) => console.log(error));
};

operation();

//criar uma conta
const createAccount = () => {
	console.log(chalk.bgGreen.black("Obrigado por usar o Accounts"));
	console.log(chalk.green("Defina as configurações da sua conta:"));
};

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

//consultar saldo
const viewMoney = () => {};

//sacar
const rescueMoney = () => {};

//sair
const exitProgram = () => {};
