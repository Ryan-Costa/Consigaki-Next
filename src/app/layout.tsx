import { ReactNode } from "react";
import { Metadata } from "next";
import "../styles/global/globals.css";

import { Karla } from "@next/font/google";
const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ConsigAki",
    template: "%s | ConsigAki",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={karla.className}>
      <head />
      <body className="h-screen w-full bg-gradient-to-r from-deg2 to-deg1">
        {children}
      </body>
    </html>
  );
}
