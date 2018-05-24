/**
 * Webpack 設定ファイル
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const _DST_DIR = path.resolve(__dirname, "dist");
const _SRC_DIR = path.resolve(__dirname, "src");

const htmlWebpackPluginOptions = {
  // テンプレートファイルへのパス
  template: path.resolve(__dirname, "src/index.ejs"),
  // 出力ファイル名
  filename: "index.html",
  // 配置場所
  inject: "body",
  // ハッシュ付与
  hash: true,
};


module.exports = {
  // エントリーポイント
  entry: path.join(_SRC_DIR, "main.js"),

  // 出力設定
  output: {
      // 出力ファイル名
      filename: "app.js",
      // 出力先のパス
      path: _DST_DIR,
  },

  // ソースファイル内の import 設定
  resolve: {
    // 補完する拡張子
    extensions: [".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin(htmlWebpackPluginOptions),
  ],

  // dev-server 設定
  devServer: {
    host: "localhost",
    port: 8080,
    contentBase: path.resolve(__dirname, "dist"),
  },

  // ソースマップ出力 有効
  devtool: "source-map",
};
