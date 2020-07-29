// ───────────────────────────────────────────────────────── require 📥 ───┐
const path = require('path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin')

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
    loader: MiniCssExtractPlugin.loader
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

const html = {
  test: /\.html$/,
  use: ["html-loader"]
}

// const img = {
//   test: /\.(svg|png|jpe?g|gif)$/,
//   use: {
//     loader: "file-loader",
//     options: {
//       name: "[name].[ext]",
//       outputPath: "img"
//     }
//   }
// }

const url = {
  test: /\.(png|jpg|gif)$/i,
  use: ['url-loader']
}

const rules = [babel, scss, url, html]
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── config 👨‍🔧 ───┐
const entry = {
  // vendor: './src/vendor.js',
  main: './src/main.js',
}

const output = {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist')
  publicPath: path.resolve(__dirname, 'public')
}

const devServer = {
  contentBase: path.join(__dirname, "dist/"),
  port: 3003,
  publicPath: "http://localhost:3000/dist/",
  historyApiFallback: true
}

const devtool = 'inline-source-map'

const plugins = [
  new MiniCssExtractPlugin({ filename: 'styles.css' }),
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
]

const optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
}
// ────────────────────────────────────────────────────────────────────────┘

// ────────────────────────────────────────────────────────── export 📤 ───┐

module.exports = (env) => {
  const isProduction = (env === "production")

  if (isProduction) {
    return {
      entry,
      output,
      devtool: 'source-map',
      module: { rules },
      plugins,
      optimization,
    }

  } else {
    return {
      entry,
      output,
      devtool: 'inline-source-map',
      module: { rules },
      plugins,
      devServer
    }
  }
}


// ────────────────────────────────────────────────────────────────────────┘
