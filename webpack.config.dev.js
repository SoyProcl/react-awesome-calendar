const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app/test.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
    },
    mode: 'production',
    watch: true,
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|build)/,
                use: {
                    loader: 'babel-loader'
                },
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
        extensions: ['.js', '.jsx'],
        symlinks: true
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 3006
    }
};