const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
        filename:'index_bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'TO-DO',
    })],
    devtool:'inline-source-map',
    mode: 'development',
    module:{
        rules:[
            {
            test: /\.s[ac]ss$/i,
            use:[
                "style-loader",
                "css-loader",
                "sass-loader",
                ],
            },
        ],
    },
    resolve: {
        fallback:{
            util: require.resolve("util/"),
            fs: false,
        }
    }
};