path = require('path');
webpack = require('webpack');

module.exports = {
    entry: {
        "groups/new_cms_classes": "./groups/new_cms_classes.js"
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("init.js"),
        new webpack.optimize.UglifyJsPlugin()
    ]
};