const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
    mode: 'production',
    entry: {
        /**
         * Here we are sharing the lodash/join module between the index and another entry points.
         * If we don't have this shared entry point, the lodash/join module will be included in both index and another entry points.
         * Doesn't matter if we import the shared module or not.
         */

        index: {
            import: './src/entry-points/index.js',
            dependOn: 'shared',
        },
        another: {
            import: './src/entry-points/another-module.js',
            dependOn: 'shared',
        },
        shared: 'lodash/join',
    },
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
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        minimize: true,
        moduleIds: 'named',
        runtimeChunk: 'single',
        minimizer: [
            "...",
            new CssMinimizerPlugin(),
        ]
    },
}