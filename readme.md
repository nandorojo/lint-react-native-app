# lint-react-native-app

A command-line interface that adds linting and prettier to a `react` / `react-native` project. It primarily targets `expo`.

Originally inspired by [this article](https://medium.com/@oliver.grack/using-eslint-with-typescript-and-react-hooks-and-vscode-c583a18f0c75) with additions to cover pieces it misses.

## Install

Run this after running `expo init` (or from `react-native` cli):

```bash
$ npx lint-expo-app
```

This will create a `.prettierrc.json` and `.eslintrc.json` file for you.

It supports TypeScript, React Hooks linters, and other recommended react / react-native linter dependencies.

**ESLint file created: `.eslintrc.json`**

```JSON
{
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"jsx": true,
		"useJSXTextNode": true
	},
	"extends": [
		"plugin:@typescript-eslint/recommended",
		"prettier",
		"prettier/@typescript-eslint"
	],
	"plugins": ["@typescript-eslint", "react-hooks"],
	"rules": {
		"@typescript-eslint/explicit-function-return-type": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn"
	}
}
```

**Prettier file created: `.prettierrc.json**

```JSON
{
	"singleQuote": true,
	"trailingComma": "es5",
	"overrides": [
		{
			"files": "*.ts",
			"options": {
				"parser": "typescript"
			}
		}
	],
	"semi": false,
	"jsxSingleQuote": false,
	"useTabs": true,
	"tabWidth": 4
}
```

**These packages will be added to your `devDependencies`**:

    "@typescript-eslint/eslint-plugin",
    "@typescript-eslint/parser",
    "eslint",
    "eslint-config-prettier",
    "eslint-plugin-prettier",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "prettier"
