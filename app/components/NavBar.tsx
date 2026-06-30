import { GoChevronDown } from "react-icons/go";

export default function Navbar() {
  return (
    <nav className="bg-indigo-950 p-10 flex flex-row items-center justify-center gap-50">
        <div>
            <img/>
        </div>
      <ul className="flex flex-row gap-10 ">
        <li className="cursor-pointer">Sobre nós</li>
        <li className="cursor-pointer p">Áreas de atuação<GoChevronDown/></li>
        <li className="cursor-pointer">Seja voluntário</li>
        <li className="cursor-pointer">Galeria</li>
        <li className="cursor-pointer">Nossas causas</li>
        <li className="cursor-pointer">Contato</li>
      </ul>

      <button className="bg-[#1BB722] p-2 border rounded cursor-pointer">WhatsApp</button>
    </nav>
  );
}
