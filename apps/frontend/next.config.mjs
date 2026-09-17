/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: './dist',
  async rewrites() {
    return [{ source: '/api/:path*', destination: 'http://localhost:3000/:path*' }];
  },
};

export default nextConfig;
