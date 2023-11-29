import { ButtonGoBack } from "@/components/common/ButtonGoBack";
import { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { ReactNode } from "react";
import { IconPartners } from "../../../../../public/icons";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Novo Convênio",
};

export default function NewAgreementLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div
        className={`${roboto.className} h-full w-full rounded-md bg-white px-6 py-14`}
      >
        <div>
          <ButtonGoBack />

          <div className="mt-12 flex gap-2">
            <h1 className="text-2xl font-bold">Adicionar Convênio</h1>
            {IconPartners}
          </div>
          <p
            className={`${inter.className} text-base tracking-tight text-text-regular`}
          >
            Prencha todos os campos
          </p>
          {children}
        </div>
      </div>
    </>
  );
}
