export function test() {
	console.log("sure lol");
}

export const commands = {
	types: "npm i --save-dev @types/react @types/react-native",
	lint:
		"npm i --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks",
	prettier: "npm install prettier eslint-config-prettier --save-dev",
	react: "npm install eslint-plugin-react --save-dev",
	vscode: "",
	generateTypes: "",
	generateLint: "",
	generatePreitter: ""
};

export const eslintrc = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		jsx: true,
		useJSXTextNode: true
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"prettier/@typescript-eslint"
	],
	plugins: ["@typescript-eslint", "react-hooks"],
	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn"
	}
};
