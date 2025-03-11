import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { TempoInit } from "@/components/tempo-init";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair-display',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Stratosphere - Marketing Solutions",
  description: "Strategic marketing solutions to elevate your brand and drive growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfairDisplay.variable}`}>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="modern-saas-theme"
        >
          {children}
        </ThemeProvider>
        <TempoInit />
      </body>
    </html>
  );
}
