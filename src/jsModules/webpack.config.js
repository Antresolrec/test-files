const webpack = require('webpack'); // webpack
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: "development",
    entry: {
        main: './src/jsModules/main/index.js',
        vendor: './src/jsModules/vendor/index.js',
    },
    devtool: false,
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    output: {
        filename: './js/[name].min.js',
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: 'maps/[name].min.js.map',
        }),
        new VueLoaderPlugin()
    ],
    performance: {
        hints: false
    }
}
