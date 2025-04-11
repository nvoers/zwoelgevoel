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
      {
        source: "/tickets",
        destination: "https://zwoelgevoel.nl/tickets",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
