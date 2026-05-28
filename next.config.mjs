import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(process.cwd()),
  },
};

export default nextConfig;
