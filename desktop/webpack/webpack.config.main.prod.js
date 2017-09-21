import webpack from "webpack";
import merge from "webpack-merge";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import baseConfig from "./webpack.config.base";

export default merge.smart(baseConfig, {
  devtool: 'source-map',
  target: "electron-main",
  entry: "./src/main/main.ts",
  output: {
    filename: "bundle.prod.js",
    path: __dirname + "/../dist/main"
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode:
        process.env.OPEN_ANALYZER === "true" ? "server" : "disabled",
      openAnalyzer: process.env.OPEN_ANALYZER === "true"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "production"
      ),
      "process.env.DEBUG_PROD": JSON.stringify(
        process.env.DEBUG_PROD || "false"
      )
    })
  ],
  /**
   * Disables webpack processing of __dirname and __filename.
   * If you run the bundle in node.js it falls back to these values of node.js.
   * https://github.com/webpack/webpack/issues/2010
   */
  node: {
    __dirname: false,
    __filename: false
  },
});
