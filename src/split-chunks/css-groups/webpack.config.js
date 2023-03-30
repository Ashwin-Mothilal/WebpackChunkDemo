const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/split-chunks/css-groups/index.js',
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        })
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
             * We have created a cache group called vendor, which will be used to split 
             * all the node_modules into a separate chunk.
             */
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
                styles: {
                    // type: "css/mini-extract",
                    filename: "styles",
                    test: /\.css$/,
                    chunks: "all",
                }
            }
        },
        minimizer: [
            "...",
            new CssMinimizerPlugin(),
        ]
    },
}