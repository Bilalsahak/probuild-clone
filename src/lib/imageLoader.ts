const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Static-export image loader: images are pre-optimised WebP files in /public,
 * so we only need to prefix the deployment base path (empty in production).
 */
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  if (/^(https?:|data:|blob:)/.test(src)) return src;
  if (basePath && src.startsWith(basePath)) return src;
  return `${basePath}${src.startsWith("/") ? src : `/${src}`}`;
}
