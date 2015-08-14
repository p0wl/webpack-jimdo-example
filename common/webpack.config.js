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
        new webpack.optimize.CommonsChunkPlugin({
            name: "init.js",
            minChunks: Infinity
        }),
        // because we know that loadthis.js and alsoloadthis.js are loaded together, webpack can share modules between them.
        new webpack.optimize.CommonsChunkPlugin({
            name: "loadthis.js",
            minChunks: Infinity,
            chunks: ['alsoloadthis.js'] 
        })
    ],
    devServer: {
        contentBase: "./build"
    }
};