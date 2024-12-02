/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: [
  //     "pagedone.io",
  //     "example.com",
  //     "anotherdomain.com",
  //     "cloudinary.com",
  //     "res.cloudinary.com",
  //     "i.ibb.co.com",
  //     "ibb.co.com",
  //     "lh3.googleusercontent.com"
  //   ],
  // },
  images: {
    domains: [
      "pagedone.io",
      "example.com",
      "anotherdomain.com",
      "cloudinary.com",
      "res.cloudinary.com",
      "i.ibb.co.com",
      "ibb.co.com",
      "lh3.googleusercontent.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};
export default nextConfig;
