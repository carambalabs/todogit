import webpack from "webpack";
import merge from "webpack-merge";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import baseConfig from "./webpack.config.base";
import { dependencies as externals } from "../package.json";
import checkNodeEnv from '../scripts/check-node-env';
import dotenv from "dotenv"

checkNodeEnv('production');
dotenv.config();

export default merge.smart(baseConfig, {
  devtool: "source-map",
  target: "electron-renderer",
  entry: "./src/renderer/index.tsx",
  output: {
    filename: "bundle.prod.js",
    path: __dirname + "/../dist/renderer"
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
      ),
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_SENDER_ID': JSON.stringify(process.env.FIREBASE_SENDER_ID),
      'process.env.RAVEN_DSN': JSON.stringify(process.env.RAVEN_DSN)
    })
  ],
});
