import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
