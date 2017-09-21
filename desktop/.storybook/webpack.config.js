
var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = function (config, env) {
    var config = genDefaultConfig(config, env);
    config.module.loaders.push({
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [/stories/, /renderer/],
        loader: 'babel-loader!awesome-typescript-loader'
    })
    config.module.loaders.push({
        test:/\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [/stories/, /renderer/],
        query: {
            presets: ['react', 'es6', "stage-0"]
        }
    })
    config.resolve.extensions.push(".tsx");
    config.resolve.extensions.push(".ts");
    config.resolve.extensions.push(".js");

    return config;
};
