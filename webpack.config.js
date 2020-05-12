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
  }
}

const css = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const rules = [babel, css]
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── config 👨‍🔧 ───┐
const entry = './src/index.js'

const output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
}

const devServer = {
  contentBase: path.join(__dirname, "public/"),
  port: 3000,
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
  module: {rules}
}
// ────────────────────────────────────────────────────────────────────────┘
