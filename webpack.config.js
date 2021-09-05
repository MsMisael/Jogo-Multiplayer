const HtmlWebPackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/Frontend/',
    output: { path: __dirname + '/src/Backend/public', filename: 'bundle.js' },
    plugins: [
        new HtmlWebPackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
}