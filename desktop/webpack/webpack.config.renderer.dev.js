import webpack from "webpack";
import merge from "webpack-merge";
import path from "path";
import fs from 'fs';
import { spawn, execSync } from 'child_process';

import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import baseConfig from "./webpack.config.base";
import { dependencies as externals } from "../package.json";
import checkNodeEnv from '../scripts/check-node-env';
import dotenv from "dotenv"

checkNodeEnv('development');
dotenv.config()

const port = process.env.PORT || 1212;
const publicPath = `http://localhost:${port}/dist`;
const dll = path.resolve(process.cwd(), 'dll');
const manifest = path.resolve(dll, 'renderer.json');

/**
 * Warn if the DLL is not built
 */
if (!(fs.existsSync(dll) && fs.existsSync(manifest))) {
  console.log(chalk.black.bgYellow.bold(
    'The DLL files are missing. Sit back while we build them for you with "npm run build-dll"'
  ));
  execSync('npm run build-dll');
}

export default merge.smart(baseConfig, {
  devtool: 'inline-source-map',
  target: "electron-renderer",
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../src/renderer/index.tsx')
  ],
  output: {
    filename: "bundle.js",
    path: __dirname + "/../dist/renderer",
    publicPath: `http://localhost:${port}/dist/`
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(manifest),
      sourceType: 'var',
    }),
    new webpack.HotModuleReplacementPlugin({
      // @TODO: Waiting on https://github.com/jantimon/html-webpack-plugin/issues/533
      // multiStep: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_SENDER_ID': JSON.stringify(process.env.FIREBASE_SENDER_ID),
      'process.env.RAVEN_DSN': JSON.stringify(process.env.RAVEN_DSN)
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loaders: ["react-hot-loader/webpack", "awesome-typescript-loader"] },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
  devServer: {
    port,
    publicPath,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    lazy: false,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join(__dirname, "..", 'dist/renderer/'),
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100
    },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
    setup() {
      if (process.env.START_HOT) {
        console.log('Staring Main Process...');
        var child = spawn('yarn run build-main-dev && yarn run start-main-dev', {
          shell: true, 
          env: process.env, 
          stdio: 'inherit'
        })
        .on('close', code => process.exit(code))
        .on('error', spawnError => console.error(spawnError));
      }
    }
  },
});
