var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3001
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            // {
            //     test: /.(jpg|png|svg)$/,
            //     loader: 'url-loader',
            //     options: {limit: 25000,}
            // },
            // {
            //     test: /.(jpg|png|svg)$/,
            //     loader: 'file-loader',
            //     options: {name: '[path][name].[hash].[ext]',}
            // }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
