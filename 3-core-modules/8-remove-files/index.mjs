import fs from "fs";

fs.unlink("arquivo.txt", function (error) {
	if (error) {
		console.log("Ocorreu um erro ao executar o comando!");
		console.log(error);
		return;
	}

	console.log("arquivo removido!");
});
