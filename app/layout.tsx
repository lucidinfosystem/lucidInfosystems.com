import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/layout/Footer";
import { Newsletter } from "./components/layout/Newsletter";
import { Header } from "./components/layout/Header";
import GoToTopButton from "./components/GoToTop";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Lucid Infosystems",
//   description:
//     "Lucid Infosystems deliver superior, measurable value to customers by implementing cloud-based solutions.",
//   openGraph: {
//     title: "Lucid Infosystems",
//     description:
//       "Lucid Infosystems deliver superior, measurable value to customers by implementing cloud-based solutions.",
//     url: "https://lucidinfosystems.com",
//     siteName: "Lucid Infosystems",
//     images: [
//       {
//         url: "/lucidInfoSystemLogo.svg",
//       },
//     ],
//   },
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://lucidinfosystem.com"), // change into real
  title: "Lucid Infosystems",
  description:
    "Lucid Infosystems provides cloud-based enterprise solutions and Salesforce implementations.",
  openGraph: {
    title: "Lucid Infosystems",
    description:
      "Leader in Salesforce and Cloud-based enterprise implementations.",
    url: "https://yourdomain.com",
    siteName: "Lucid Infosystems",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lucid Infosystems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucid Infosystems",
    description:
      "Empowering enterprises with Salesforce and Cloud-based solutions.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1920px] mx-auto`}
      >
        <Toaster richColors position="top-center"  />
        <Header />
        {children}
        <Newsletter />
        <Footer />
        <GoToTopButton />
      </body>
    </html>
  );
}
