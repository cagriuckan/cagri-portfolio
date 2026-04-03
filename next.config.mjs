import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const baseConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default function nextConfig(phase) {
  // `output: "export"` disables the server output that `next dev` relies on.
  if (phase === PHASE_DEVELOPMENT_SERVER) return baseConfig;

  return {
    ...baseConfig,
    output: "export",
  };
}
