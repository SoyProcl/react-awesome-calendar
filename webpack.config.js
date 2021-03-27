const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|build)/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.(ttf|woff|woff2|eot|png|jpg|gif|svg|base64|mp4)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000000,
                        },
                    },
                ],
            },
            {
                test: /\.scss|css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin('dist', {}),
        new WebpackMd5Hash(),
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"],
        symlinks: true
    },
};