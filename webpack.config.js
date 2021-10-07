const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      
    }
    ]
  }
};
/*
This is where we configure the rules for our modules.
Order of loaders is important, they run from right to left
css-loader 
  Collects the CSS from the CSS Files when we import them
style-loader
  Adds the CSS to the HTML document
npm serve
  Starts our web server

  */