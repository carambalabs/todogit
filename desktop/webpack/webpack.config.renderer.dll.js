import webpack from "webpack";
import merge from "webpack-merge";
import path from 'path';
import baseConfig from "./webpack.config.base";
import { dependencies } from "../package.json";

const dist = path.resolve(process.cwd(), 'dll');

export default merge.smart(baseConfig, {
  externals: ['fsevents', 'crypto-browserify', 'source-map-support'],
  entry: {
    renderer: (
      Object
        .keys(dependencies || {})
        .filter(dependency =>  !dependency.includes("@types") )
    ),
  },
  output: {
    filename: "[name].dev.dll.js",
    library: "renderer",
    libraryTarget: "var",
    path: dist,
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(dist, "[name].json"),
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: path.resolve(process.cwd(), "app"),
        output: {
          path: path.resolve(process.cwd(), "dll"),
        },
      },
    }),
  ],

});
