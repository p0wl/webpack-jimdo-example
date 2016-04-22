var path = require('path');
var webpack = require('webpack');
var isProductionBuild = false;

module.exports = {
    entry: {
        'web.js': [
            'src/astart.js',
            'src/fromweb.esnext.js'
        ],
        'cms.js': [
            'src/astart.js',
            'src/bstart.esnext.js',
            'src/fromweb.esnext.js'
        ],
        'libs.global.js': [
            'format-message'
        ]
    },
    devtool: 'eval',
    output: {
        path: path.join(__dirname, '/build/assets'),
        publicPath: '/build/assets',
        filename: isProductionBuild ? '[name].[chunkhash].js' : '[name]',
        chunkFilename: '[name].[chunkhash].js',
        sourceMapFilename: 'sourcemaps/[file].map'
    },
    externals: [
        {
            'jimdoData': 'window.jimdoData || window.parent.jimdoData'
        }
    ],
    resolve: {
        root: [
            path.join(__dirname)
        ],
        extensions: [
            '',
            '.esnext.js',
            '.webpack.js',
            '.web.js',
            '.js',
            '.jsx',
            '.esnext.jsx'
        ]
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json'},
            {
                test: /.+\.esnext\.js/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: [
                        'transform-runtime',
                        ['extract-format-message', {
                            'generateId': 'literal',
                            'outFile': 'locales/de.json'
                        }],
                        ['transform-format-message', {
                            'generateId': 'literal',
                            'translations': require('./locales/index.js'),
                            'inline': false
                        }]
                    ]
                }
            },
            { test: /.+\.jsx$/, loader: 'babel?optional[]=runtime', exclude: /node_modules/ }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'js/init.js',
            // Set to infinity in order to only extract webpack specific code into init.js.
            // Other commonly used chunks like jquery or other libs are ignored
            minChunks: Infinity,
            chunks: ['cms.js', 'libs.global.js']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            // As GROUP_GLOBAL_LIBS_JS is loaded in wrapper,cms,siteadmin, we will use it as vendor chunk for now
            name: 'libs.global.js', // HEADHELPER: GROUP_GLOBAL_LIBS_JS
            minChunks: Infinity,
            chunks: ['cms.js']
        }),
        new webpack.optimize.OccurenceOrderPlugin(true), // http://webpack.github.io/docs/list-of-plugins.html#occurenceorderplugin
        new webpack.optimize.DedupePlugin(),
    ]
};
