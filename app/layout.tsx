import type { Metadata } from "next";
import "./globals.css";
import "./index.css";
import Header from "@/components/header";
import Script from "next/script";
import AOSProvider from "@/components/aosProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Astute Law Office || Criminal Law || 02",
  description: "Astute Law Office || Criminal Law || 02",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <AOSProvider>
          {children}
          <Toaster/>
        </AOSProvider>

        {/* Calendly widget script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}