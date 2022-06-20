/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')


const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  cssModules: true,
  webpack: (config, options) => {
      config.node = {
          fs: "empty",
      };
      config.module.rules.push({
          use: [
              options.defaultLoaders.babel,
              {
                  loader: "url-loader?limit=100000",
              },
              {
                  loader: "file-loader",
              },
          ],
      });
      return config;
  },
};

module.exports = nextConfig
module.exports = withVideos() 