import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/interfones",
        destination: "/#services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
