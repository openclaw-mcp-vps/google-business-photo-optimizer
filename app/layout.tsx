import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google Business Photo Optimizer",
  description: "Optimize your Google Business Profile photos for better local search ranking."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8fa06152-cc6d-47ce-bed5-1e1f00e9ba2d"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
