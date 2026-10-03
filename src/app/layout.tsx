import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "星読みナビ",
    template: "%s · 星読みナビ",
  },
  description:
    "星をヒントに、自分を読み解いてみよう。惑星・星座・ハウスを組み合わせて読む、占星術の学習ノート。",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F4F0E8",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* next/font の subset に日本語グリフが含まれないため、unicode-range の配信を使う */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Symbols+2&family=Shippori+Mincho:wght@500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
