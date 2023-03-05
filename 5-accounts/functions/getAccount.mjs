import fs from "fs";

const getAccount = (accountName) => {
	const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
		encoding: "utf-8",
		flag: "r",
	});

	return JSON.parse(accountJSON);
};

export default getAccount;
