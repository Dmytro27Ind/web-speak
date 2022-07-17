const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: 'development',
    entry:{
        main: path.resolve(__dirname, 'app/scripts/index.js')
    },
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        alias: {
            '@': path.resolve(__dirname, 'app')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname,'app/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module:{
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    }
}