/** @type {import('next').NextConfig} */
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
  experimental: {
    appDir: true,
  },
};
