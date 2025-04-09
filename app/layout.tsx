import type { Metadata } from "next";
import { space_grotesk } from "@/app/lib/fonts";
import "@/app/styles/globals.css";
import Footer from "@/app/components/footer";
import { Toaster } from "@/app/components/ui/toaster";
import NavBar from "@/app/components/navigation/nav-bar";

export const metadata: Metadata = {
  title: {
    template: "%s | Isai's Portfolio",
    default: "Isai's Portfolio",
  },
  description:
    "A portfolio website for Isai Sanchez, a mechanical engineer and freelance software developer",
  keywords: [
    "mechanical engineer",
    "software developer",
    "CAD",
    "robotics",
    "Next.js",
    "React",
    "TailwindCSS",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Isai" }],
  creator: "Isai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.isais.dev",
    siteName: "Isai's Portfolio",
    title: "Isai - Engineer & Developer",
    description: "A portfolio of experiences and projects",
    images: [
      {
        url: "https://www.isais.dev/_next/image?url=%2Fassets%2Fmebw.JPG&w=3840&q=75",
        width: 1200,
        height: 630,
        alt: "Black and White mirror film selfie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isai - Mechanical Engineer & Software Developer",
    description: "An engineer's portfolio of experiences and projects",
    images: [
      "https://www.isais.dev/_next/image?url=%2Fassets%2Fmebw.JPG&w=3840&q=75",
    ],
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${space_grotesk.className} antialiased bg-primary sm:custom-gradient custom-scrollbar flex flex-col min-h-screen`}
      >
        <main style={{ backgroundImage: `url('/assets/grainy-texture.png')` }}>
          <NavBar />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
