// TO CONNECT MAIN.JS TO INDEX.HTML OR INDEX.JS
const path = require('path');

module.exports = {

    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    //  FOR CSS AND IMAGE.
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
}