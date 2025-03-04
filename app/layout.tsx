import type { Metadata } from "next";
import { space_grotesk } from "@/app/lib/fonts";
import "@/app/styles/globals.css";
import Footer from "@/app/components/footer";
import { Toaster } from "@/app/components/ui/toaster";
import NavBar from "@/app/components/navigation/nav-bar";

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
        className={`${space_grotesk.className} antialiased bg-primary bg-grid-white/[0.07] sm:custom-gradient custom-scrollbar flex flex-col min-h-screen`}
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
