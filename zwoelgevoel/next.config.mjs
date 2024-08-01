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
      {
        source: "/tickets",
        destination:
          "https://shop.ikbenaanwezig.nl/tickets/event/zwoel-gevoel-2024",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
