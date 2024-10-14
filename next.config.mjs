/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  output: 'export',
  sassOptions: {
    prependData: '@import "sassHelpers/index.scss";',
  }
};

export default nextConfig;
