var webpack = require('webpack')
//插件的引入和ruanyf写的有丁点区别
var commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: "vendor.js"
})
module.exports = {
    entry: {
        app: './main.js',
        vendor: ['jquery']
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [commonChunkPlugin,
        //不用每一个模块都去引用jquery 
        //Automatically loaded modules. 
        //Module (value) is loaded when the identifier (key) is used as free variable in a module. 
        //The identifier is filled with the exports of the loaded module.
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
}