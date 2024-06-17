const path = require(`path`);

// precisa exportar as ações pois aqui é como se fosse um 
// módulo a parte

module.exports = {
    mode: `development`,
    entry: `./geraCPF.js`,
    output: {

        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: `bundle.js`
    },
    //passar o webpack pelo babel
    module:{
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use:{
                loader: `babel-loader`,
                options:{
                    presets:[`@babel/env`]
                }
            }
        },{
            test: /\.css$/,
            use:['style-loader', 'css-loader']
        }]
    },
    devtool: `source-map`
};