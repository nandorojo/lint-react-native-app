import React, { useEffect, useState } from "react";
import { Box, Color } from "ink";
import { exec } from "child_process";
import { commands, eslintrc } from "../../constants";
import fs from "fs";

const steps = [
	{ value: "Installing eslint dependencies...", id: "install" },
	{ value: "Generating .eslintrc...", id: "generate" }
];

export default function ESLint() {
	const [step, setStep] = useState(0);

	useEffect(() => {
		exec(commands.lint, () => {
			setStep(1);
			fs.appendFileSync("eslintrc.json", JSON.stringify(eslintrc));
		});
		// execSync(commands.generateLint);
	}, []);
	// useEffect(() => {
	// 	// if (steps[step].id === "generate") {
	// 	// 	fs.writeFileSync(".eslintrc.json", JSON.stringify(eslintrc));
	// 	// }
	// }, [step]);

	const textProps = (index: number) => ({
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
		</Box>
	);
}
