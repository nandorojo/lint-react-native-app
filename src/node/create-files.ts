import ncp from "ncp";

export async function createEslint() {
	return new Promise((resolve, reject) => {
		ncp("./files/eslintrc.json", ".eslintrc.json", error =>
			error ? reject(error) : resolve("done")
		);
	});
}
