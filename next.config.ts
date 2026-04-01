import type { NextConfig } from "next";
import { withOutstatic } from "outstatic/next-plugin";

const nextConfig: NextConfig = {
  devIndicators: false,
};

export default withOutstatic(nextConfig);
