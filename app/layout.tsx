import type { Metadata } from "next";
import { space_grotesk } from "@/app/lib/fonts";
import "@/app/styles/globals.css";
import Footer from "@/app/components/footer";
import { Toaster } from "@/app/components/ui/toaster";
import NavBar from "@/app/components/navigation/nav-bar";

export const metadata: Metadata = {
  title: {
    template: "%s | Rahul Jangir Work",
    default: "Rahul Jangir Work",
  },
  description:
    "खम्माघणी! I'm Rahul Jangir — a full-stack developer, Linux tweaker, and embedded systems enthusiast, passionate about building clean, efficient, and powerful systems.",
  keywords: [
    "full-stack developer",
    "Linux",
    "embedded systems",
    "Angular",
    "Next.js",
    "Supabase",
    "PostgreSQL",
    "SQL Server",
    "DWM",
    "Suckless",
    "developer portfolio",
    "Rahul Jangir",
    "system architect",
  ],
  authors: [{ name: "Rahul Jangir" }],
  creator: "Rahul Jangir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rahuljangir.work",
    siteName: "Rahul's Work",
    title: "Rahul Jangir - Developer & System Architect",
    description: "Explore the work of Rahul Jangir — full-stack developer, Linux optimizer, and passionate builder of modern software systems.",
    images: [
      {
        url: "https://rahuljangir.work/assets/profile-image.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Rahul Jangir profile image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Jangir - Full-Stack Developer & Linux Power User",
    description: "Explore the projects and skills of Rahul Jangir, blending web development with system-level productivity.",
    images: [
      "https://rahuljangir.work/assets/profile-image.jpg", // Replace with actual image path
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
