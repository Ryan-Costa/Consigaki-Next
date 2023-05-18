"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import "./style.css";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const [activeLink, setActiveLink] = useState("login");

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  return (
    <div className="h-screen w-full px-96 py-60 font-bold">
      <nav className="mb-16 flex justify-start gap-16 text-white">
        <Link
          href="/login"
          className={`nav ${activeLink === "login" ? "active" : ""}`}
          onClick={() => handleLinkClick("login")}
          passHref
        >
          LOGIN
        </Link>
        <Link
          href="/cadastro"
          className={`nav ${activeLink === "cadastro" ? "active" : ""}`}
          onClick={() => handleLinkClick("cadastro")}
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
          ></Image>
        </div>
      </div>
    </div>
  );
}
