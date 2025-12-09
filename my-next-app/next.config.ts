import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: ".",
    rules: {
      "*.md": { loaders: [] }, // tells Turbopack to ignore markdown files
    },
  },
};

export default nextConfig;
