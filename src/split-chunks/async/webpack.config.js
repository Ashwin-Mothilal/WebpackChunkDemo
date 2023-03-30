const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/split-chunks/async/index.js',
    devtool: "source-map",
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
             * This will split the chunks available in async modules (which are imported asynchronously)
             * If you have same module in sync also, it will be included in the sync chunk
             */
            chunks: "async",
        },
        minimizer: [
            "...",
            new CssMinimizerPlugin(),
        ]
    },
}