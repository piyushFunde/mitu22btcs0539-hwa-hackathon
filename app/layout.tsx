import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: {
    default: "Slowbowl — Mealtime, slowed down",
    template: "%s · Slowbowl",
  },
  description:
    "The Clockwork Forage Tower: a wind-up dog puzzle that releases food in small doses over about three hours.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.className} flex min-h-screen flex-col bg-mist text-ink antialiased`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
