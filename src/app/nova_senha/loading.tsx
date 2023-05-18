import Image from "next/image";
import styles from "./styles.module.css";

export default function Loading() {
  return (
    <>
      <div
        className={`${styles.container} flex h-screen w-screen flex-col items-center justify-center`}
      >
        <h1 className="mb-24 text-4xl font-bold text-validate-text">
          Estamos validando algumas informações suas, um instante
        </h1>
        <Image
          src="/images/clock.png"
          width={150}
          height={176}
          alt="clock"
        ></Image>
      </div>
    </>
  );
}
