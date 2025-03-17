import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";

export default defineConfig([
    {
        plugins: {
            jsdoc: jsdoc
        },
        rules: {
            "jsdoc/require-jsdoc": "error",
            "jsdoc/require-param": "error",
            "jsdoc/require-param-description": "error",
            "jsdoc/require-param-name": "error",
            "jsdoc/require-param-type": "error",
            "jsdoc/require-returns": "error",
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
                customElements: 'readonly',
                HTMLElement: 'readonly',
                console: 'readonly',
            }
        },
    },
    js.configs.recommended,
    jsdoc.configs['flat/recommended-error'],
]);
