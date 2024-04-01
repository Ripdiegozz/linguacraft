import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linguacraft",
  description: "Language learning app for everyone",
  icons: [
    {
      rel: "favicon",
      url: "/favicon.svg",
      href: "/favicon.svg",
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
