import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 127.0.0.1 で開いたとき、開発用の画面がブロックされないようにする
  allowedDevOrigins: ["127.0.0.1"],
  // 開発中の丸いインジケーターが、スマホ画面の本文に重ならないようにする
  devIndicators: false,
};

export default nextConfig;
