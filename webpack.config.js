const config = {
    entry: ['./app/index.js'],
    output: {
      path: __dirname + '/build',
      filename: 'and-ds.js'
    },
    module: {
      rules:[
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        }
      ],
      loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader?-svgo' },
        {
          loader:'babel-loader',
          test: /\.js$/,
          exclude:  /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    devServer:{
      port: 3000,
      contentBase: __dirname + '/build',
      inline: false
    }
}
module.exports = config;
