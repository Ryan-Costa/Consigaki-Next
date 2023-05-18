import { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ConsigAKI",
    template: "%s | ConsigAKI",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen w-full bg-gradient-to-r from-deg2 to-deg1">
        {children}
      </body>
    </html>
  );
}
