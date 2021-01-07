module.exports = {
    $schema: 'http://json.schemastore.org/prettierrc',
    printWidth: 100,
    tabWidth: 4,
    singleQuote: true,
    arrowParens: 'always',
    quoteProps: 'consistent',
    overrides: [
        {
            files: ['*.yaml', '*.yml'],
            options: {
                bracketSpacing: false,
            },
        },
    ],
};
