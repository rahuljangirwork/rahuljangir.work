import type { Metadata } from "next";
import { space_grotesk } from "@/app/ui/fonts";
import "@/app/globals.css";
import NavBar from "@/app/ui/nav-bar";

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
        className={`${space_grotesk.className} antialiased bg-gradient-to-b from-black to-slate-500`}
      >
        <NavBar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
