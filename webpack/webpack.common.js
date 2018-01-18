/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: [
            path.resolve(__dirname, '../src'), // module use src as a url base
            'node_modules'
        ],
        alias: {
            'assets': path.resolve(__dirname, '../src/assets/'),  // use assets/** as images base
            'states': path.resolve(__dirname, '../src/states/') // states base url
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'Demo',
            template: path.resolve(__dirname, '../src/index.html'),
            filename: path.resolve(__dirname, '../dist/index.html')
        })
    ]
}

module.exports = config