import { ncp } from "ncp";

export default function generateCommand() {
	// return new Promise((resolve, reject) =>
	ncp("./lib/commands", "commands", error => {
		// if (error) {
		// 	reject(error);
		// } else {
		// 	resolve("done");
		// }
		console.log("done", error);
	});
	// );
}
