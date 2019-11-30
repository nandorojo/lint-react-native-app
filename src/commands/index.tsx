import React, { useState, useCallback } from "react";
import { Text, Static, Color, Box } from "ink";
import ESLint from "../components/eslint";
import Prettier from "../components/prettier";

/// Hello world command
const Hello = () => {
	const [step, setStep] = useState(0);
	const one = useCallback(() => setStep(1), []);
	const two = useCallback(() => setStep(2), []);
	return (
		<>
			{step >= 0 && <ESLint onFinish={one} />}
			{step >= 1 && <Prettier onFinish={two} />}
			{step >= 2 && (
				<Box>
					<Color bgBlue white>
						🥳 Done!
					</Color>
				</Box>
			)}
		</>
	);
};

export default Hello;
