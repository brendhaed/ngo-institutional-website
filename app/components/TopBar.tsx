import { FaFacebook, FaInstagram } from "react-icons/fa"
import { IoLocation } from "react-icons/io5"

export default function Topbar(){
    return(
        <div className="bg-emerald-500 flex flex-row p-2 gap-250">
            <div className="flex flex-row gap-2">
                <IoLocation/>
                <p>Cidade</p>
            </div>

            <div className="flex flex-row gap-10">
                <h5>Siga-nos</h5>
                <div className="flex flex-row gap-2">
                    <FaInstagram className="w-5 h-5 cursor-pointer"/>
                    <FaFacebook className="w-5 h-5 cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}