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
        destination: "/tickets",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
