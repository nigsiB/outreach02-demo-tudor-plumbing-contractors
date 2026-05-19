import type { Metadata } from "next";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";

import "./globals.css";
const font = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: { default: "Tudor Plumbing | Cranleigh", template: "%s" },
  description: "Cranleigh plumbing demo.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <header className="border-b bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold">Tudor Plumbing</Link>
            <nav className="flex gap-5 text-sm"><a href="tel:01483200000" className="font-semibold text-[var(--accent)]">Call</a><Link href="/contact">Contact</Link></nav>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
