import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#141B34] flex flex-col p-5 md:p-20 gap-15 select-none">
      <div className="flex flex-col md:flex-row gap-20 lg:gap-100">
        <Image
          src="/img/logo.png"
          alt="Foto da logo" 
          width={150}
          height={150}
          className="w-20 h-20 lg:w-40 lg:h-40"
        />
        <div className="text-white flex flex-col gap-3 items-center md:items-start">
          <div className="flex flex-row gap-4 font-bold text-sm">
            <a href="#">Sobre</a>
            <a href="#">Atuação</a>
            <a href="#">Serviços</a>
            <a href="#">Realizações</a>
            <a href="#">Contato</a>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna.
          </p>
          <button className="bg-red-800 font-white w-50 p-2 border-2 cursor-pointer">Fazer doação</button>
        </div>
      </div>

      <div className="border-t border-gray-200 my-6" />

      <div className="flex flex-col-reverse gap-20 md:flex-row md:gap-150 items-center">
        <p className="text-white text-sm max-w-lg">YME GRANDS-LACS  © 2026. Todos direitos reservados.</p>
        <div className="flex flex-row gap-5">
            <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <FaFacebook className="w-8 h-8 text-black"/>
            </a>
            <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <FaInstagram className="w-8 h-8 text-black"/>
            </a>
            <a href="#" className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                <FaXTwitter className="w-8 h-8 text-black"/>
            </a>
        </div>
      </div>
    </footer>
  );
}
