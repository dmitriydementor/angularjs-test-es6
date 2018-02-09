const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BabelPlugin = require("babel-webpack-plugin");

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin(),
        new BabelPlugin({
            test: /\.js$/,
            presets: ['es2015'],
            sourceMaps: true,
            compact: true
        })
    ],
    loaders: [
        {
            loader: 'babel-loader',
            include: [
                path.resolve(__dirname, "src/js"),
            ],
            // Only run `.js` and `.jsx` files through Babel
            test: /\.jsx?$/,
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'stage-0'],
            }
        }
    ]
});
