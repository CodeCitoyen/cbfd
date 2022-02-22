const path = require('path');
const FileIncludeWebpackPlugin = require('file-include-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: './script.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'docs'),
    },
    module: {
        rules: [
            {
                test: /\.scss?$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|webp|ico)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            },
        ]
    },
    plugins: [
        new FileIncludeWebpackPlugin({
            source: './pages',
            replace: [{
                regex: /\[\[FILE_VERSION]]/g,
                to: 'v=1.0.0',
            }],
        }),
        new MiniCssExtractPlugin(),
    ],
};
