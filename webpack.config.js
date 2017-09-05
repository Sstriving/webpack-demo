var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        main: "./src/script/main.js",
        a: "./src/script/a.js",
        b:"./src/script/b.js",
        c:"./src/script/c.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "js/[name].js"
    },
    plugins: [
        new htmlWebpackPlugin({
            filename:"a.html",
            template: 'index.html',
            inject: false,
            title: "this is a.html",
            chunks:['a','main']
        }),
        new htmlWebpackPlugin({
            filename:"b.html",
            template: 'index.html',
            inject: false,
            title: "this is b.html",
            chunks:['b','main']
        }),
        new htmlWebpackPlugin({
            filename:"c.html",
            template: 'index.html',
            inject: false,
            title: "this is c.html",
            chunks:['c','main']
        })
    ]
};
