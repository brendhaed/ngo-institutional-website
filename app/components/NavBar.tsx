import Image from "next/image";
import { FiAlignLeft } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";
import WppButton from "./common/WppButton";

export default function Navbar() {
  return (
    <nav className="bg-indigo-950 p-5">
      <div className="flex flex-row justify-between items-center md:gap-20">
        <div className="shrink-0">
          {/* logo */}
          <Image src={"/img/logo.png"} width={60} height={60} alt="logo na ONG"/>
        </div> 
        {/* links nav desktop */}
        <div className="hidden md:flex flex-row flex-1 justify-center items-center gap-10 text-base md:text-sm">
          <a className="cursor-pointer">Sobre nós</a>
          <a className="cursor-pointer flex flex-row gap-2 align-center">
            Áreas de atuação
            <GoChevronDown />
          </a> 
          <a className="cursor-pointer">Seja voluntário</a>
          <a className="cursor-pointer">Galeria</a>
          <a className="cursor-pointer">Nossas causas</a>
          <a className="cursor-pointer">Contato</a>
        </div>
        {/* botão whatsapp */}
        <div className="hidden md:block shrink-0">
          <WppButton/>
        </div>
        {/* mobile icones lateral nav */}
        <div className="flex gap-5">
          <div className="md:hidden">
            <button className="bg-[#1BB722] p-2 border-2 rounded cursor-pointer text-sm lg:text-base">
              WhatsApp
            </button>
          </div>
          <div className="md:hidden">
            <FiAlignLeft className="text-white w-10 h-10 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
}
