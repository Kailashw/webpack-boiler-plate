const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv');
const webpack = require('webpack')

module.exports = () => {
    const env = dotenv.config().parsed;
    // reduce it to a nice object, the same as before
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});
    
    // env helpers
    const isProduction = env && env.production !== undefined

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index_bundle.js'
        },
        module: {
            rules: [
                { test: /\.(js)$/, use: 'babel-loader' },
                { test: /\.css$/, use: ["style-loader", "css-loader"] }
            ]
        },
        node: {
            fs: 'empty'
        },
        mode: isProduction ? 'production' : 'development',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            publicPath: 'http://localhost:8000/',
            compress: true,
            port: 8000,
            hot: true,
            historyApiFallback: true
          },
        plugins: [
            new webpack.DefinePlugin(envKeys),
            new HtmlWebpackPlugin({
                template: 'src/index.html'
            })
        ]
    }
}