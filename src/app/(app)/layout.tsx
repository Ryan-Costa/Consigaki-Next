import Image from "next/image";
import { ReactNode } from "react";

import { Karla } from "@next/font/google";
import Sidebar from "@/components/Sidebar";
const karla = Karla({ subsets: ["latin"] });

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <div
        className={`${karla.className} flex h-screen w-full bg-layout-app text-word-app`}
      >
        <aside className="h-full w-60 bg-aside shadow-2xl">
          <Sidebar />
        </aside>
        <div className="flex w-full flex-col">
          <header className="flex h-20 w-full bg-dark-blue shadow-2xl">
            <div className="flex items-center px-6">
              <Image
                src="/images/logo-2.png"
                className="mr-2"
                alt="logo"
                width={44}
                height={44}
              />
              <p className="text-2xl font-bold text-white">ConsigAki</p>
            </div>
          </header>
          {/* <section className="bg-black">{children}</section> */}
        </div>
      </div>
    </>
  );
}
