import { ReactNode } from "react";
import "../styles/global/globals.css";

import ToastComponent from "@/components/compCommon/ToastComponent";
import { AuthProvider } from "@/contexts/AuthContext";
import { Metadata } from "next";
import { Karla } from "next/font/google";
const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Consigaki",
    default: "Consigaki",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={karla.className}>
      <head />
      <body className="custom-scrollbar h-screen w-full bg-gradient-to-r from-deg2 to-deg1">
        <AuthProvider>
          <ToastComponent />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
