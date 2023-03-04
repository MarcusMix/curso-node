import inquirer from "inquirer";
import checkAccount from "./checkAccount.mjs";

const rescueMoney = () => {
	inquirer
		.prompt([
			{
				name: "accountName",
				message: "Qual o nome da sua conta?",
			},
		])
		.then((response) => {
			const accountName = response["accountName"];

			//verificar se a conta existe
			if (!checkAccount(accountName)) {
				return rescueMoney();
			}
		})
		.catch((error) => console.log(error));
};

export default rescueMoney;
