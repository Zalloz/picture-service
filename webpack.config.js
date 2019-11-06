const path = require("path");

const SRC_DIR = path.join(__dirname, "client/src");
const DIST_DIR = path.join(__dirname, "client/dist");

const nodeExternals = require("webpack-node-externals");

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-react"],
      plugins: ["transform-class-properties"]
    }
  }
};
const jsx = {
  test: /\.jsx?/,
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-env", "@babel/preset-react"]
  }
};
const serverConfig = {
  mode: "development",
  target: 'node',
  node: {
    fs: 'empty',
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: {
    "server.js": path.resolve(__dirname, "server/server.js")
  },
  module: {
    rules: [js, jsx]
  },
  output: {
    path: path.resolve(__dirname, "server/dist"),
    filename: "[name]"
  }
};

const clientConfig = {
  mode: "development",
  target: "web",
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'
      }
    ]
  }
};

module.exports = [serverConfig, clientConfig];