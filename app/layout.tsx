import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import db from "@/lib/db";
import { ToasterProvider } from "@/providers/toast-provide";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diska Admin",
  description: "Made with love <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const store = db.store

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}</body>
      </html>
    </ClerkProvider>

  );
}
