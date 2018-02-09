/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Create different css.

const extractVenderCss = new ExtractTextPlugin({
    filename: 'vender.css',
    allChunks: true
})
const extractStyles = new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true
})

const VENDOR_LIBS = [
    'react', 'react-dom', 'react-router-dom', 'redux'
]

module.exports = merge(common, {
    entry: {
        vendor: VENDOR_LIBS,
        app: path.resolve(__dirname, '../src/Main.jsx')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: extractVenderCss.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                module: true,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'postcss-loaderdd'
                    ]
                })
            },
            {
                test: /\.scss$/,  // only for styles in entry jsx
                include: path.resolve(__dirname, '../src/styles'),
                use: extractVenderCss.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'resolve-url-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                includePaths: [
                                    path.resolve(__dirname, '../src/styles')
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/, // deal with styles in different modules
                exclude: path.resolve(__dirname, '../src/styles'), 
                use: extractStyles.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 2,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'resolve-url-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            }
                        }
                    ]
                })
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '..')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        extractVenderCss,
        extractStyles
    ]
})