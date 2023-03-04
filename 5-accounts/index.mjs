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
			if(action === 'Criar Conta') {
                createAccount()
            }
		})
		.catch((error) => console.log(error));
};

operation();
//criar uma conta
const createAccount = () => {
    console.log(chalk.bgGreen.black('Obrigado por usar o Accounts'))
    console.log(chalk.green('Defina as configurações da sua conta:'))
}
