var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: {
        "new_cms_classes.css": "legacy_bundle.css"
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: "[name]",
        chunkFilename: "[chunkhash]"
    },
    devtool: 'source-map',
    resolve: {
        root: [
            path.join(__dirname, "files")
        ]
    },
    module: {
        loaders: [
            [
                {
                    test: /\.sass$/,
                    // Passing indentedSyntax query param to node-sass
                    loader: "sass?indentedSyntax"
                },
                {
                    test: /legacy_.+\.css$/,
                    loader: ExtractTextPlugin.extract("style-loader", "css-loader?root=~!sass")
                },
                { 
                    test: /\.css$/, loaders: ["style", "css?root=~"] 
                }
            ]
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "init.js",
            minChunks: Infinity,
            children: true
        }),
        new webpack.optimize.OccurenceOrderPlugin(),

        new ExtractTextPlugin("[name]", {
            allChunks: true
        })
    ],
    devServer: {
        contentBase: "./build",
        proxy: [{
            path: /\/google(.*)/,
            target: "http://www.google.com/"
        }]
    },
    
};