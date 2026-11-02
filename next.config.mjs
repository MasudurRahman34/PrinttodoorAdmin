/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "printlabapi.devtaijul.com",
      "placehold.co",
      "test.api.weareprintlab.co.uk",
      "d31iucwqwnu1hh.cloudfront.net",
    ],
  },
};

export default nextConfig;
