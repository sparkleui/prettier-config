'use strict';

/** @type {import('prettier').Config} */
module.exports = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'consistent',
    trailingComma: 'all',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    plugins: ['prettier-plugin-packagejson'],
    overrides: [
        {
            files: ['package.json', 'package-lock.json', '*.md'],
            options: {
                printWidth: 80,
                singleQuote: false,
                tabWidth: 2,
                trailingComma: 'none',
            },
        },
    ],
};
