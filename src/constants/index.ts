export function test() {
	console.log("sure lol");
}

export const commands = {
	types: "yarn add --dev @types/react @types/react-native",
	lint:
		"yarn add --dev eslint-plugin-react eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks",
	prettier:
		"yarn add --dev prettier eslint-plugin-prettier eslint-config-prettier",
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
		"plugin:react/recommended",
		"prettier",
		"prettier/@typescript-eslint"
	],
	plugins: ["@typescript-eslint", "react-hooks"],
	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"no-unused-vars": [
			"error",
			{ vars: "all", args: "after-used", ignoreRestSiblings: false }
		],
		"@typescript-eslint/no-use-before-define": [
			"error",
			{ functions: true, classes: true, variables: false }
		] // disable the rule for variables, but enable it for functions and classes
	},
	overrides: [
		{
			files: ["**/*.tsx"],
			rules: {
				"react/prop-types": "off"
			}
		}
	]
};

export const prettierrc = {
	singleQuote: true,
	trailingComma: "es5",
	overrides: [
		{
			files: "*.ts",
			options: {
				parser: "typescript"
			}
		}
	],
	semi: false,
	jsxSingleQuote: false,
	useTabs: true,
	tabWidth: 4
};
