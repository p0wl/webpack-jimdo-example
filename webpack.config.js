path = require('path');
webpack = require('webpack');

module.exports = {
    entry: {
        "./groups/new_cms_classes": "./groups/new_cms_classes.js"
    },
    output: {
        path: './build',
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    resolve: {
        root: path.join(__dirname, "files")
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("init.js")
    ]
};