/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', // This must match the hostname in your error
        port: '',
        pathname: '/**', // This allows all paths under that hostname
      },
    ],
  },
};

export default nextConfig;
