var webpack = require('webpack');
var TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // Used for image mockup on Storybook
  webpackFinal: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.__NEXT_IMAGE_OPTS': JSON.stringify({
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          domains: [],
          path: '/',
          loader: 'default',
        }),
      }),
    );
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    return config;
  },
};
