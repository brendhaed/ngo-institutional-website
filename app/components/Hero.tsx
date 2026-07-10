import Image from "next/image";
import Button from "./ui/Button";
import { HiArrowRightCircle } from "react-icons/hi2";
 
export default function Hero() {
  return (
    <section className="flex flex-col relative overflow-hidden bg-[#141B34] bg-center lg:p-20">
      <Image
        src="/img/hero-banner.jpg"
        width={500}
        height={500}
        alt="Foto de fundo"
        className="absolute inset-0 h-full w-full object-cover opacity-10 filter bluescale contrast-125"
      />

      <div className="flex flex-col gap-10 px-10 py-10 md:px-20">
        <h1 className="text-white font-extrabold uppercase text-2xl lg:text-5xl">
          Transformamos alimentos em vida
        </h1>
        <p className="text-white font-base max-w-sm">
          Mais de 8.000 famílias já receberam apoio através das nossas ações.
        </p>
      </div>

      {/* botões */}
      <div className="flex flex-col items-start lg:flex-row gap-5 px-10 pb-10 md:px-20">
        <Button variant="solid">Doe Agora</Button>
        <Button
          variant="transparent"
          icon={<HiArrowRightCircle className="w-6 h-6" />}
        >
          Saiba mais
        </Button>
      </div>
    </section>
  );
}
