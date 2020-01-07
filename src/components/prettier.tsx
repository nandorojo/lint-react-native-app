import React, { useEffect, useState, useRef } from "react";
import { Box, Color } from "ink";
import { exec, execSync } from "child_process";
import { commands, eslintrc } from "../constants";
import fs from "fs";

const steps = [
	{ value: "Installing prettier dependencies...", id: "install" },
	{ value: "Generating .prettierrc.json...", id: "generate" },
	{
		value: "Prettier complete",
		id: "done"
	}
];

type Props = {
	onFinish: () => void;
};

export default function Prettier(props: Props) {
	const [step, setStep] = useState(0);
	const onFinish = useRef(props.onFinish);

	useEffect(() => {
		onFinish.current = props.onFinish;
	}, [props.onFinish]);

	useEffect(() => {
		execSync(commands.prettier);
		execSync(commands.types);
		setStep(1);
		fs.appendFileSync(".prettierrc.json", JSON.stringify(prettierrc));
		setStep(2);
		onFinish.current();
	}, []);
	const textProps = index => ({
		green: step > index || undefined,
		blue: step === index || undefined
	});
	return (
		<Box flexDirection="column">
			{step >= 0 && (
				<Box paddingY={1}>
					<Color {...textProps(0)}>
						{step === 0 ? "⏳" : "✅"} {steps[0].value}
					</Color>
				</Box>
			)}
			{step >= 1 && (
				<Box paddingY={1}>
					<Color {...textProps(1)}>
						{step === 1 ? "⏳" : "✅"} {steps[1].value}
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

const prettierrc = {
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
