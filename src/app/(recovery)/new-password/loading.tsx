import Image from 'next/image'
export default function Loading() {
  return (
    <>
      <div
        className={
          "flex h-screen w-screen flex-col items-center justify-center bg-[url('/images/fundo.png')] bg-cover bg-center"
        }
      >
        <h1 className="mb-24 text-4xl font-bold text-dark-blue">
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
  )
}
