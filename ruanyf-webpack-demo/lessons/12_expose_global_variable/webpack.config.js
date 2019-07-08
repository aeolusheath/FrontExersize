module.exports ={
    entry: {
        app: './main.jsx'
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },
    //你不像把这个aa 这个库打包进bundle.js 里面。单独存放 则用这个external
    externals: {
    // require('data') is external and available
    //  on the global var data
    'data': 'data'
     }
}