import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CREAM - Your creamy CRM companion",
  description: "CREAM - Your creamy CRM companion",
  metadataBase: new URL('https://cream.mk'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#009965"/>
      <meta name="msapplication-TileColor" content="#009965"/>
      <meta name="theme-color" content="#009965"/>
    </head>
    <body className={`${inter.className} bg-main-tealGreen text-main-text`}>{children}</body>
    </html>
  );
}
