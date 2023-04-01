/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,




  webpack: (config) => {

    config.module.rules.push({
      test: /\.mp4$/,
      use: [
          {
              loader: "file-loader",
              options: {
                  name: "[name].[ext]",
                  outputPath: "video"
              }
          }
      ]
    })


    return config
  }
}

module.exports = nextConfig
