import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Placeholder photography. Swap for real GouldCreative assets later.
      { protocol: "https", hostname: "picsum.photos" },
      // Placeholder client logos via Simple Icons CDN. Swap for real clients.
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
  },
};

export default nextConfig;
