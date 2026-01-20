import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Allow WebSocket connections from development origins
  experimental: {
    allowedDevOrigins: ['localhost:3000', '127.0.0.1:3000'],
  },
};

export default nextConfig;
