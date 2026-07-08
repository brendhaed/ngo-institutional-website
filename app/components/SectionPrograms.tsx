import Image from "next/image";
import Button from "./ui/Button";

export default function SectionPrograms() {
  return (
    <section className="flex flex-col gap-10 p-10 md:p-20 select-none">
      {/* div principal 1 */}
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-2xl text-gradient-primary font-bold"> 
          Nossos programas de ação
        </h1>
        <p className="text-black max-w-sm text-sm">
          Chaque programme que nous menons est pensé pour répondre aux besoins
          spécifiques des communautés, en mettant l'accent sur la durabilité et
          l'autonomisation.
        </p>
        <Button variant="solid">Saber mais</Button>
      </div>

      {/* div principal 2 */}
      <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-center justify-center text-[#484C52]">
        <Image
          src="/img/foto-alt-2.jpg"
          alt="foto"
          width={500}
          height={300}
          className="rounded-2xl top-8 right-5"
        />

        <div className="flex flex-col gap-5 w-full max-w-lg">
          <div>
            <h2 className="font-bold text-base md:text-2xl">Acesso a água potável</h2>
            <p className="max-w-md text-sm md:text-base">
              Nous construisons des infrastructures pour fournir un accès fiable
              et durable à l'eau potable dans les zones vulnérables.
            </p>
            <a href="#" className="text-[#1BB722] text-sm md:text-base">Saiba mais</a>
          </div>

          <div>
            <h2 className="font-bold text-base md:text-2xl">
              Assistência de itens de higiene
            </h2>
            <p className="max-w-md text-sm md:text-base">
              Nous construisons des infrastructures pour fournir un accès fiable
              et durable à l'eau potable dans les zones vulnérables.
            </p>
            <a href="#" className="text-[#1BB722] text-sm md:text-base">Saiba mais</a>
          </div>

          <div>
            <h2 className="font-bold text-base md:text-2xl">Acesso a cesta de alimentos</h2>
            <p className="max-w-md text-sm md:text-base">
              Nous construisons des infrastructures pour fournir un accès fiable
              et durable à l'eau potable dans les zones vulnérables.
            </p>
            <a href="#" className="text-[#1BB722] text-sm md:text-base">Saiba mais</a>
          </div>
        </div>
      </div>

    </section>
  );
}
