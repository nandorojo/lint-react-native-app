import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { Text } from "ink";

/// Hello world command
const Hello = ({ name }: Props) => <Text>Hello, {name}</Text>;

const propTypes = {
	/// Name of the person to greet
	name: PropTypes.string.isRequired
};
Hello.propTypes = propTypes;

type Props = InferProps<typeof propTypes>;

export default Hello;
