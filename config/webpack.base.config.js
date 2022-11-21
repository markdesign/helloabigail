const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        index: "./src/index.tsx",
    },
    output: {
        filename: 'assets/js/[name].bundle.js',
        assetModuleFilename: 'assets/[name][ext]',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]',
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/index.html',
                filename: './index.html'
            }
        ),
        new CopyPlugin({
            patterns: [
                { from: "public", to: "." },
            ],
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
}