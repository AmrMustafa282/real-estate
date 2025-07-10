// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   transpilePackages: ["@workspace/ui"],
// }

// export default nextConfig

// import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
