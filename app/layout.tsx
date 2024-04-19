import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linguacraft",
  description: "Language learning app for everyone",
  icons: [
    {
      rel: "favicon",
      url: "/favicon.svg",
      href: "/favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            rel="shortcut icon"
            href="/assets/app/mascot.svg"
            type="image/x-icon"
          />
        </head>

        <body className={font.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
