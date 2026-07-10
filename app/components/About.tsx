import Image from "next/image";

export default function About() {
  return ( 
    <section className="flex flex-col pt-20 px-10 lg:flex-row lg:p-20 gap-20 select-none">
      {/* about */}
      <div className="flex flex-col gap-5 select-none">
        <h1>
          Quem somos?
        </h1> 
        <p className="text-black max-w-lg">
          YME Grands Lacs est une organisation non gouvernementale dédiée à
          l'amélioration des conditions de vie des communautés vulnérables de la
          région des Grands Lacs. Nous œuvrons pour offrir un accès à l'eau
          potable, promouvoir les énergies renouvelables et encourager le
          développement durable. Ensemble, nous créons des solutions qui
          changent des vies.
        </p>

        <div>
          <h2 className="text-[#4AA35E] text-center md:text-left">Nossos Valores</h2>

          <div className="text-black flex flex-row gap-4 justify-center md:justify-start">
            <div className="flex flex-col items-center">
              <Image src="/img/favourite-circle.png" alt="Icone 1" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10"/>
              <h5 className="text-sm md:text-base">Amor</h5>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/img/setting-circle.png" alt="Icone 2" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10"/>
              <h5 className="text-sm md:text-base">Empenho</h5>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/img/hands-circle.png" alt="Icone 3" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10"/>
              <h5 className="text-sm md:text-base">Solidariedade</h5>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/img/checkmark-circle.png" alt="Icone 4" width={40} height={40} className="w-8 h-8 lg:w-10 lg:h-10"/>
              <h5 className="text-sm md:text-base">Aceitação</h5>
            </div>
          </div>

        </div>
      </div>

      {/* div */}
      <div className="relative w-full max-w-md lg:max-w-lg mx-auto select-none">
        <div className="bg-[#1BB722] absolute inset-0 translate-x-4 translate-y-4 rounded-2xl"></div>
        <Image
          src="/img/foto-alt-2.jpg"
          alt="foto"
          width={500}
          height={300}
          className="relative w-full h-auto rounded-2xl translate-y-12"
        />
      </div>
    </section>
  );
}
