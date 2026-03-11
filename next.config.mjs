/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Google user content domains (lh1-lh6)
      {
        protocol: "https",
        hostname: "lh1.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh2.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh4.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh5.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh6.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      // Google static content
      {
        protocol: "https",
        hostname: "www.gstatic.com",
        port: "",
        pathname: "/**",
      },
      // Booking.com images
      {
        protocol: "https",
        hostname: "q-xx.bstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "r-xx.bstatic.com",
        port: "",
        pathname: "/**",
      },
      // Expedia/Tripadvisor
      {
        protocol: "https",
        hostname: "images.trvl-media.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dynamic-media-cdn.tripadvisor.com",
        port: "",
        pathname: "/**",
      },
      // Hotel branding
      {
        protocol: "https",
        hostname: "static.cupid.travel",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "photos.hotelbeds.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d2hyz2bfif3cr8.cloudfront.net",
        port: "",
        pathname: "/**",
      },
    ],
    // Optional: Configure image formats
    formats: ["image/avif", "image/webp"],
    // Optional: Set device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Optional: Set image sizes for next/image
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Optional: Configure other Next.js settings
  reactStrictMode: true,
  // If you're using environment variables for API keys
  env: {
    SERPAPI_KEY: process.env.SERPAPI_KEY,
  },
};

export default nextConfig;
