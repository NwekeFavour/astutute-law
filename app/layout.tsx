import type { Metadata } from "next";
import "./globals.css";
import "./index.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Lawsy || Criminal Law || 02",
  description: "Lawsy || Criminal Law || 02",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
