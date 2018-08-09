const path = require("path");

module.exports = {
    entry: "./app/client/index.jsx",
    output: {
        path: path.join(__dirname, "/app/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};