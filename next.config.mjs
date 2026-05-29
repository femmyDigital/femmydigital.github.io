/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
