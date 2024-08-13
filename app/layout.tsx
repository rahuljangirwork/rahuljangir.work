import type { Metadata } from "next";
import { space_grotesk } from "@/app/components/fonts";
import "@/app/globals.css";
import NavBar from "@/app/components/nav-bar";
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
        className={`${space_grotesk.className} antialiased bg-primary custom-scrollbar`}
      >
        <NavBar />
        <main className="min-h-screen">{children}</main>
        <Toaster />
        <footer className="flex justify-between items-center bg-palette-2 bg-opacity-10 text-palette-2 text-opacity-50 mt-4 p-2">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <p className="text-sm">
              © 2024 Isai Sanchez. All rights reserved.
            </p>
          </div>
          <h4 className="font-bold pr-4">
            <a href="mailto:isaisanchezcc@gmail.com">Connect</a>
          </h4>
        </footer>
      </body>
    </html>
  );
}
