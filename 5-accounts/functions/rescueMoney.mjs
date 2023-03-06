//functions
import checkAccount from "./checkAccount.mjs";
import removeAmount from "./removeAccount.mjs";

//modules
import inquirer from "inquirer";


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

			inquirer
				.prompt([
					{
						name: "amount",
						message: "Quanto você quer sacar?",
					},
				])
				.then((response) => {
					const amount = response["amount"];

					removeAmount(accountName, amount);
				});
		})
		.catch((error) => console.log(error));
};

export default rescueMoney;