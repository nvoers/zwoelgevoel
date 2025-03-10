/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/linktree",
        permanent: false,
      },
      {
        source: "/qrcode",
        destination: "/linktree",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
