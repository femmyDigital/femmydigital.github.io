import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "femmyDigital | Digital Agency for Scalable Products",
  description:
    "We build scalable digital products and solutions for ambitious businesses. Expert in web development, SaaS, frontend, backend, and DevOps.",
  icons: {
    icon: [
      {
        url: "/black-logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/white-logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/white-logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/black-logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
