import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/product-management/konekin",
        destination: "/projects/konekin",
        permanent: true,
      },
      {
        source: "/product-management/glacier",
        destination: "/projects/glacier",
        permanent: true,
      },
      {
        source: "/product-management/digital-skill-assessment",
        destination: "/projects/digital-assessment",
        permanent: true,
      },
      {
        source: "/product-management/onium",
        destination: "/projects/onium",
        permanent: true,
      },
      {
        source: "/product-management",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
