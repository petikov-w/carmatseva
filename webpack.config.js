const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");


// По умолчанию ставим режим разработки
let mode = 'development'
// Сравниваем с текущим значением переменной NODE_ENV
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
// Выводим немного статистики
console.log('Текущий режим: '+mode + ' mode')
console.log('Корневой каталог проекта: ',__dirname)


module.exports = {   //----- начало -----
    // Точка входа
    entry: {
        app: './src/index.js'
    },
    // Точка выхода
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    resolve: {
        extensions: ['.js','.vue','.json'],
        alias: {
            "@": path.resolve('src')
        }
    },
    // Подключаемые модули
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                exclude: /node_modules/
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|webp|jpeg)$/i,
                type: 'asset/resource',
                //use: [ 'file-loader', 'webp-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.pug$/,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        // use: ['pug-loader']
                        use: ['pug-plain-loader']
                    },
                    {
                        // use: ['raw-loader', 'pug-loader']
                        use: ['raw-loader', 'pug-plain-loader']
                    }
                ]

                // loader: 'pug-loader',
                // exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env']
                    // }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.pug"
        }),
        new VueLoaderPlugin()
    ],
    // Поключение webpack-dev-server для отладки браузере
    devServer: {

    },
    devtool: 'source-map',
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },

}  // ----- конец -----

