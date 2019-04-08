const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require("webpack");
const {
    banner
} = require('./license');
module.exports = {
    entry: [
        path.resolve(__dirname, 'src/index.ts')
    ],
    devtool: 'source-map',
    target: "node",
    mode: process.env.NODE_ENV || 'development',
    optimization: {
        // We no not want to minimize our code.
        minimize: false,
        // do not set NODE_ENV
        nodeEnv: false
    },
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader'
            }
        }]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, process.env.BUILD_FOLDER || 'bin'),
        pathinfo: true,
        library: 'Fort-Creator',
        libraryTarget: "commonjs2"
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: banner,
        }),
        new webpack.BannerPlugin({
            banner: "#!/usr/bin/env node",
            raw: true
        }),
    ],
    externals: [nodeExternals()]
};