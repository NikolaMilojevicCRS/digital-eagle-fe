/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'), // Include the original styles directory
      path.join(__dirname, 'app/[lng]') // Include the new app/[lng] directory
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '**'
      }
    ],
    disableStaticImages: true
  },
  transpilePackages: ['mui-tel-input'],
  webpack: config => {
    // Add support for importing images
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]'
          }
        }
      ]
    });
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Apply headers to all routes
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate'
          },
          {
            key: 'Pragma',
            value: 'no-cache'
          },
          {
            key: 'Expires',
            value: '0'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
