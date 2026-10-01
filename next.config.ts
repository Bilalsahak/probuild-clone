import type { NextConfig } from "next";

/**
 * Static export: `npm run build` writes a plain HTML/CSS/JS site to ./out
 * that any static host can serve (Cloudflare, GitHub Pages, Netlify, ...).
 *
 * NEXT_PUBLIC_BASE_PATH is empty in production (seattlemasterfix.com serves
 * from "/"). Preview builds on GitHub Pages set it to "/<repo-name>".
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
  reactStrictMode: true,
};

export default nextConfig;
