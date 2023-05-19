"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const pathname = usePathname();
  console.log(pathname);
  const [activeLink, setActiveLink] = useState(pathname.replace("/", ""));

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  return (
    <div className="h-screen w-full px-96 py-60 font-bold">
      <nav className="mb-16 flex justify-start gap-16 text-white">
        <Link
          href="/signin"
          className={`nav ${activeLink === "signin" ? "active" : ""}`}
          onClick={() => handleLinkClick("signin")}
          passHref
        >
          LOGIN
        </Link>

        <Link
          href="/signup"
          className={`nav ${activeLink === "signup" ? "active" : ""}`}
          onClick={() => handleLinkClick("signup")}
          passHref
        >
          CADASTRO
        </Link>
      </nav>
      <div className="flex">
        <div className="text-white">{children}</div>
        <div className="">
          <Image
            src="/images/logo.png"
            className="h-auto w-auto"
            priority
            width={500}
            height={500}
            alt="logo image"
          />
        </div>
      </div>
    </div>
  );
}
