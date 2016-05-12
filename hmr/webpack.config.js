var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "loadthis.js": ["loadthis.js"],
        "alsoloadthis.js": ["alsoloadthis.js"]
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

            ]
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: "."
    }
};