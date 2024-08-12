import type { Metadata } from "next";
import { space_grotesk } from "@/app/components/fonts";
import "@/app/globals.css";
import NavBar from "@/app/components/nav-bar";

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
      </body>
    </html>
  );
}
