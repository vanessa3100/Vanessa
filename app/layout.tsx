import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

/** Metadata applied to every page in the application. */
export const metadata: Metadata = {
  title: "Vanessa",
  description: "Next.js application with Vercel Analytics",
};

/**
 * Root layout shared by all pages.
 * Mounts the Vercel {@link Analytics} component so that page-view tracking
 * works automatically across the entire application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
