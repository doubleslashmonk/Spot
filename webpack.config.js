module.exports = {
    /* Use this only for production deployment  
    devtool: 'cheap-module-source-map' */
    
    entry: './app/main.js',
    output: {
        filename: 'public/bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};