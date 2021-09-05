const HtmlWebPackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/client.js',
    output: { path: __dirname + '/dist/', filename: 'bundle.js' },
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