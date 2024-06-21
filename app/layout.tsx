import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
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
      <body className={`${inter.className} antialiased bg-primary`}>
        <main className="bg-primary">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
