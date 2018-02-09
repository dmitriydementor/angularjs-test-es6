const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    allChunks: true,
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        index: './src/js/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Angular JS test webpack app",
            template: './src/index.html'
        }),
        extractSass,
        new CleanWebpackPlugin(['dist']),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    }
};
