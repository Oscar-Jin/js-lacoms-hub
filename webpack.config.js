// ───────────────────────────────────────────────────────── require 📥 ───┐
const path = require('path')
// ────────────────────────────────────────────────────────────────────────┘

// ─────────────────────────────────────────────────────────── rules 👮‍♂️ ───┐
const babel = {
  test: /\.(js|jsx)$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel-loader',
  options: {
    presets: ['@babel/env', '@babel/preset-react'],
    plugins: [
      ["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ]
  }
}

const scss = {
  test: /\.s?css$/,
  use: [{
    loader: 'style-loader', // inject CSS to page
  }, {
    loader: 'css-loader', // translates CSS into CommonJS modules
  }, {
    loader: 'postcss-loader', // Run post css actions
    options: {
      plugins: function () { // post css plugins, can be exported to postcss.config.js
        return [require('precss'), require('autoprefixer')]
      }
    }
  }, {
    loader: 'sass-loader' // compiles Sass to CSS
  }]
}

const img = {
  test: /\.(png|svg|jpg|gif)$/,
  use: ['file-loader']
}

const url = {
  test: /\.(png|jpg|gif)$/i,
  use: ['url-loader']
}

const rules = [babel, scss, url]
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── config 👨‍🔧 ───┐
const entry = './src/main.js'

const output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
}

const devServer = {
  contentBase: path.join(__dirname, "public/"),
  port: 3003,
  publicPath: "http://localhost:3000/dist/",
  historyApiFallback: true
}

const devtool = 'inline-source-map'
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐
module.exports = {
  entry,
  output,
  devtool,
  devServer,
  module: { rules }
}
// ────────────────────────────────────────────────────────────────────────┘
