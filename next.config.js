/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
    NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN:
      process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
    NEXT_PUBLIC_THUNDERMAP: process.env.NEXT_PUBLIC_THUNDERMAP,
  },
  images: {
    domains: ["twisteddreams-s3-bucket.s3.us-west-1.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/**",
      },
    ],
  },
};

module.exports = nextConfig;
