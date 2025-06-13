import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blogs app",
  description: "We create blogs and display in all blogs page and have a nav bar. This is all using nextjs, Typescript,shadcn and tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className=" bg-green-500 p-3 flex flex-wrap items-center">
          <div className="flex gap-4 ">
            <Link className="px-4 py-2 bg-white text-green-500 rounded hover:bg-gray-200 active:scale-90 transition-transform" href={'/'}>Home</Link>
            <Link className="px-4 py-2 bg-white text-green-500 rounded hover:bg-gray-200 active:scale-90 transition-transform" href={`/blogs/`}>All Blogs</Link>
          </div>
          <Link className="px-4 py-2 bg-white text-green-500 rounded ml-auto hover:bg-gray-200 active:scale-90 transition-transform" href={'new_blog/'}>add new blog</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
