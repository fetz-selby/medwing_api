const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname+'/build',
        filename: "app.bundle.js"
    },
    devServer: {
        inline: false,
        contentBase: "./build",
    },
    target : 'node',
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.js$/, use: 'babel-loader' }
        ]
    },
    externals : [nodeExternals()],
    plugins: []
};