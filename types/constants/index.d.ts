export declare function test(): void;
export declare const commands: {
    types: string;
    lint: string;
    prettier: string;
    vscode: string;
    generateTypes: string;
    generateLint: string;
    generatePreitter: string;
};
export declare const eslintrc: {
    parser: string;
    parserOptions: {
        jsx: boolean;
        useJSXTextNode: boolean;
    };
    extends: string[];
    plugins: string[];
    rules: {
        "@typescript-eslint/explicit-function-return-type": string;
        "react-hooks/rules-of-hooks": string;
        "react-hooks/exhaustive-deps": string;
        "no-unused-vars": (string | {
            vars: string;
            args: string;
            ignoreRestSiblings: boolean;
        })[];
        "@typescript-eslint/no-use-before-define": (string | {
            functions: boolean;
            classes: boolean;
            variables: boolean;
        })[];
    };
    overrides: {
        files: string[];
        rules: {
            "react/prop-types": string;
        };
    }[];
};
