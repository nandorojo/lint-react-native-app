import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Text } from "ink";
import { execSync } from "child_process";

const commands = [
	{
		name: "TypeScript file (tsconfig.json)",
		command: ""
	},
	{
		name: "",
		key: "prettier"
	}
];

export default function ExpoTypescript() {
	useEffect(() => {
		execSync("npm i -D @nandorojo/fuego", {
			stdio: "inherit"
		});
	}, []);
	return <Text>Hey</Text>;
}

ExpoTypescript.propTypes = {
	ignoreTs: PropTypes.bool
};
