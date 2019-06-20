const webpack = require('webpack');
module.exports = {
    plugins: [
        // other plugins,
        new webpack.ProvidePlugin({

        }),
    ],
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        }
    }
};
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                }
            }),
        ],
    }
};