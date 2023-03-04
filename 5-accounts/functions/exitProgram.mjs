import chalk from "chalk";

const exitProgram = () => {
	console.log(chalk.bgGreen.black("Obrigado por usar o Accounts!"));
	process.exit();
};

export default exitProgram;
