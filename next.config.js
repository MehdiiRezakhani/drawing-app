/** @type {import('next').NextConfig} */
//const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
//const NextFederationPlugin = require('@module-federation/nextjs-mf');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const TerserPlugin = require('terser-webpack-plugin');

//const ModuleFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack: (config, { isServer }) => {
    process.env.NEXT_PRIVATE_LOCAL_WEBPACK = 'true';

    if (!isServer) {
      config.output.publicPath = "auto";
      /* = {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: "auto",
      };*/
      config.optimization = {
        //minimizer: false,
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
          cacheGroups: {
            common: {
              name: 'chunk-common',
              minChunks: 3,
              enforce: true,
              priority: -20,
              chunks: 'async',
              reuseExistingChunk: true,
              test(module) {
                if (
                  module.type === 'provide-module' ||
                  module.type === 'consume-shared-module' ||
                  module.type === 'remote-module'
                ) {
                  return false;
                }
                return true;
              },
            },
          },
        },
      };
      config.performance = {
        maxAssetSize: 1000000, // 1 MB
        maxEntrypointSize: 1000000, // 1 MB
      };
      //config.devtool = false;
    
      config.plugins.push(
        new ModuleFederationPlugin({
          name: 'DrawingApp',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            //'./DrawingApp': './src/layouts/AppLayout.tsx',
            './DrawingApp': './src/pages/_app.tsx',
          },
          remotes: {
            //SharedComponents: `SharedComponents@https://components.tailorchi.com/remoteEntry.js?v=${new Date().getTime()}`,
          },
          shared: {
            // react: {
            //     singleton: true,
            //     requiredVersion: '^18.3.1',
            // },
            // 'react-dom': {
            //     singleton: true,
            //     requiredVersion: '^18.3.1',
            // },
          },
        })
      );
    }
    return config;
  },
  reactStrictMode: true,
  distDir: 'dist',
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};
