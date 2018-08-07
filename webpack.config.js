const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",
  output: {
    libraryTarget: "umd",
    library: "vueNotVisible",
    filename: "vue-not-visible.js"
  },
  resolve: {
    extensions: [".js"],
  },
  target: 'web',
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(['./dist'])
  ],
};