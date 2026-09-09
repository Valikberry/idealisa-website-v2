/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  images: {
    unoptimized: true,
  },
  // lenis ships ES2021 syntax (`??=`) untranspiled. Without this, that raw
  // syntax reaches the browser as-is and fails to PARSE on older mobile /
  // in-app-browser JS engines — since it's a static import in the root
  // layout's SmoothScroll wrapper, that parse failure kills hydration for
  // the entire app before any handler attaches (see smooth-scroll.tsx).
  transpilePackages: ["lenis"],
};

export default nextConfig;
