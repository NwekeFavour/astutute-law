import type { Metadata } from "next";
import "./globals.css";
import "./index.css";
import Header from "@/components/header";
import Script from "next/script";
import AOSProvider from "@/components/aosProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.astutelawoffice.com"), // 🔧 swap in your real domain
  title: {
    default: "Astute Law Office | Criminal Law",
    template: "%s | Astute Law Office",
  },
  description:
    "Astute Law Office provides expert criminal law representation, defending your rights with personalized, results-driven legal counsel.",
  keywords: [
    "criminal lawyer",
    "criminal defense attorney",
    "law firm",
    "legal representation",
    "Astute Law Office",
  ],
  authors: [{ name: "Astute Law Office" }],
  creator: "Astute Law Office",
  publisher: "Astute Law Office",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.astutelawoffice.com", // 🔧 same domain
    siteName: "Astute Law Office",
    title: "Astute Law Office | Criminal Law",
    description:
      "Expert criminal law representation. Defending your rights with personalized, results-driven legal counsel.",
    images: [
      {
        url: "/og-image.jpg", // 🔧 add a 1200x630 image at public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Astute Law Office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astute Law Office | Criminal Law",
    description:
      "Expert criminal law representation. Defending your rights with personalized, results-driven legal counsel.",
    images: ["/og-image.jpg"], // 🔧 same image as above
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // 🔧 add if you have one (180x180)
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        />
        <Script id="google-analytics" strategy="afterInteractive">
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