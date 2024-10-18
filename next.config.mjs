/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  output: 'export',
  trailingSlash: true,
  sassOptions: {
    prependData: '@import "sassHelpers/index.scss";',
  }
};

export default nextConfig;
