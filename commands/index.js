"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const ink_1 = require("ink");
/// Hello world command
const Hello = ({ name }) => react_1.default.createElement(ink_1.Text, null,
    "Hello, ",
    name);
const propTypes = {
    /// Name of the person to greet
    name: prop_types_1.default.string.isRequired
};
Hello.propTypes = propTypes;
exports.default = Hello;
//# sourceMappingURL=index.js.map