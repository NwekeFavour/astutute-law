import type { Metadata } from "next";
// @ts-expect-error - Next.js handles global CSS imports without type declarations
import "./globals.css";
// @ts-expect-error - Next.js handles global CSS imports without type declarations
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
          <Toaster />
        </AOSProvider>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RKYD06HF3H"
        ></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RKYD06HF3H');
          `}
        </Script>
        {/* Calendly widget script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
