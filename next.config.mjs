/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.credly.com" },
      { protocol: "https", hostname: "www.knowbe4.com" },
      { protocol: "https", hostname: "files.readme.io" },
      { protocol: "https", hostname: "www.aqskill.org" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
    ],
  },
};

export default nextConfig;
