import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "CONSIGAKI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-deg2 to-deg1 w-full h-screen">
        {children}
      </body>
    </html>
  );
}
