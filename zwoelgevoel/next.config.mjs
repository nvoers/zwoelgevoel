/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/tickets",
        destination:
          "https://shop.ikbenaanwezig.nl/tickets/event/zwoel-gevoel-2024",
        permanent: false,
        basePath: false,
      },
      {
        source: "/qrcode",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
