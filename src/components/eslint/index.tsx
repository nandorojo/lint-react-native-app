import React, { useEffect, useState, useRef } from "react";
import { Box, Color } from "ink";
import { exec, execSync } from "child_process";
import { commands } from "../../constants";
import fs from "fs";

const eslintrc = {
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

const steps = [
	{
		value: "Installing eslint dependencies...",
		id: "install",
		done: "ESLint dependencies installed"
	},
	{
		value: "Generating .eslintrc.json...",
		done: ".eslintrc.json file generated",
		id: "generate"
	}
];

type Props = {
	onFinish: () => void;
};

export default function ESLint(props: Props) {
	const [step, setStep] = useState(0);
	const onFinish = useRef(props.onFinish);

	useEffect(() => {
		onFinish.current = props.onFinish;
	}, [props.onFinish]);
	useEffect(() => {
		execSync(commands.lint);
		setStep(1);
		fs.appendFileSync(".eslintrc.json", JSON.stringify(eslintrc));
		setStep(2);
		onFinish.current();
	}, []);
	const textProps = (index: number) => ({
		green: step > index || undefined,
		blue: step === index || undefined
	});
	return (
		<Box flexDirection="column">
			{step >= 0 && (
				<Box paddingY={1}>
					<Color {...textProps(0)}>
						{step === 0 ? `⏳ ${steps[0].value}` : `✅ ${steps[0].done}`} {}
					</Color>
				</Box>
			)}
			{step >= 1 && (
				<Box paddingY={1}>
					<Color {...textProps(1)}>
						{step === 1 ? `⏳ ${steps[1].value}` : `✅ ${steps[1].done}`}
					</Color>
				</Box>
			)}
			{step >= 3 && (
				<Box paddingY={1}>
					<Color green>Done 🥳</Color>
				</Box>
			)}
		</Box>
	);
}
