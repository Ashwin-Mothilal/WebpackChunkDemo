const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/split-chunks/all/index.js',
    devtool: false,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
        new MiniCssExtractPlugin({})
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    output: {
        filename: 'main.[name].[contenthash].js',
        chunkFilename: 'chunk.[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        minimize: true,
        moduleIds: 'named',
        runtimeChunk: 'single',
        splitChunks: {
            /**
             * This splits all the common dependencies in to separate chunk (includes lodash and other dependencies)
             */
            chunks: "all",
            cacheGroups: {
                default: false,
                defaultVendors: false
            }
        },
        minimizer: [
            "...",
            new CssMinimizerPlugin(),
        ]
    },
}