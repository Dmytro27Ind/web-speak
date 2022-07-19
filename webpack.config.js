const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev


module.exports = {
    mode: 'development',
    entry:{
        templates: path.resolve(__dirname, 'app/scripts/templates.js')
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
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devtool: isDev? 'source-map' : undefined,
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'app/index.html'),
            chunks: ['templates']
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'app/templates/sidenav-content.html'),
            filename: path.resolve(__dirname, 'dist/templates/sidenav-content.html'),
            chunks: []
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'app/templates/header-content.html'),
            filename: path.resolve(__dirname, 'dist/templates/header-content.html'),
            chunks: []
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'app/pages/home.html'),
            filename: path.resolve(__dirname, 'dist/pages/home.html'),
            chunks: ['templates']
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'app/pages/profile.html'),
            filename: path.resolve(__dirname, 'dist/pages/profile.html'),
            chunks: ['templates']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
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
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-typescript']
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
        ]
    }
}