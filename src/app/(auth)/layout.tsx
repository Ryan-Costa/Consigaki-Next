"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import "./style.css";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const [activeLink, setActiveLink] = useState("signin");

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  return (
    <div className="bg-gradient-to-r from-deg2 to-deg1 w-full h-screen px-96 py-60 font-bold">
      <nav className="text-white flex gap-16 justify-start mb-16">
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
            width={378}
            height={367}
            alt="logo image"
          ></Image>
        </div>
      </div>
    </div>
  );
}
