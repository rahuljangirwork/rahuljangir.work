import type { Metadata } from "next";
import { space_grotesk } from "@/app/lib/fonts";
import "@/app/globals.css";
import NavBar from "@/app/components/navigation/nav-bar";
import Footer from "./components/footer";
import { Toaster } from "@/app/components/ui/toaster";

export const metadata: Metadata = {
  title: "Isai Portfolio",
  description: "isai's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${space_grotesk.className} antialiased bg-primary bg-grid-white/[0.04] sm:custom-gradient custom-scrollbar flex flex-col min-h-screen`}
      >
        <NavBar />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
