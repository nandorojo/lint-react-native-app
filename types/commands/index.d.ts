import PropTypes from "prop-types";
declare const Hello: {
    ({ name }: PropTypes.InferProps<{
        name: PropTypes.Validator<string>;
    }>): any;
    propTypes: {
        name: PropTypes.Validator<string>;
    };
};
export default Hello;
