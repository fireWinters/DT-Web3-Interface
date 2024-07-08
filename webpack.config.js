const {resolve} =require('path')
const merge =require('webpack-merge')
const argv=require('yargs-parser')(process.argv.slice(2))
const _mode=argv.mode||'development'
const _mergeConfig=require(`./config/webpack.${_mode}.js`)
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackBaseConfig={
    entry:{
        main:resolve('src/index.tsx')
    },
    module:{
        rules:[
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader:'swc-loader'
                }
            },
            // css
            {
                test: /\.css$/i,
                include:[
                    resolve(__dirname, 'src'),
                    resolve(__dirname, 'node_modules')
                ],
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{
                            importLoader:1
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    }
};
module.exports=merge.default(webpackBaseConfig, _mergeConfig)