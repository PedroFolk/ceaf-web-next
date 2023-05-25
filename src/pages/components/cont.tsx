import quadra1 from "../../img/Quadra1.jpg"
import quadra2 from "../../img/Quadra2.jpg"
import campo1 from "../../img/Campo.jpg"
import copa from "../../img/CopaMaua.jpg"

import Image from "next/image"
import Link from "next/link"
import { checkAdminByEmail } from "@/lib/controller"
import Cookies from "js-cookie"

export default function Cont() {


    const email = Cookies.get("email");

    if (email == null) {
    } else {
        checkAdminByEmail(email)

    }


    return (
        <main className="font-poppins">
            <div className="flex-col my-5 space-y-5 mx-3">
                <div className="sm:flex space-y-5 sm:space-y-0">
                    <Link href="/pagSelecao" className="border-2 p-2 border-black hover:bg-mauaBrown bg-mauaLightBrown ml-2.5 mr-5 rounded-xl shadow-md flex flex-col md:flex-row sm:w-1/2 ">
                        <Image src={quadra1} className=" w-340  m-auto border-2 border-black sm:my-auto rounded-xl" alt="Quadra" />
                        <div className="ml-5 mt-5 mr-5 text-center sm:text-left">
                            <h3>Quadras</h3>
                            <p className="pb-5">
                                Etiam gravida arcu sit amet dui euismod congue. Phasellus vestibulum congue neque. Aenean
                                bibendum
                                in sapien non mattis. Duis purus libero, scelerisque a consequat eget, maximus hendrerit ante.
                            </p>
                            <p className="p-3 font-bold text-black text-center hover:text-white hover:bg-mauaRed bg-mauaYelllowButton rounded-xl border-2 border-black">Faça sua reserva aqui</p>
                        </div>
                    </Link>

                    <Link href="/PagCampoMaua" className="border-2 p-2 border-black hover:bg-mauaBrown bg-mauaLightBrown ml-2.5 mr-5 rounded-xl shadow-md flex flex-col md:flex-row sm:w-1/2 ">
                        <Image src={campo1} className="w-340 m-auto  border-2 border-black sm:my-auto rounded-xl" alt="Quadra" />
                        <div className="ml-5 mt-5 mr-5 text-center sm:text-left">
                            <h3>Campo</h3>
                            <p className="pb-5">
                                Etiam gravida arcu sit amet dui euismod congue. Phasellus vestibulum congue neque. Aenean
                                bibendum
                                in sapien non mattis. Duis purus libero, scelerisque a consequat eget, maximus hendrerit ante.
                            </p>
                        </div>
                    </Link>
                </div>

                <Link href="PagCopaMaua" className="bg-mauaLightBrown hover:bg-mauaBrown p-2 border-2 border-black ml-2.5 mr-5 flex flex-col rounded-xl shadow-md sm:flex-row">
                    <Image src={copa} className="m-auto sm:m-0 w-340  border-2 border-black sm:justify-center lg:justify-right rounded-xl" alt="Quadra" />
                    <div className="ml-5 mt-5 mr-5  text-center sm:text-left">
                        <h3>Copa Maua</h3>
                        <p className=" align-middle items-center pb-5 sm:mx-10">
                            Etiam gravida arcu sit amet dui euismod congue. Phasellus vestibulum congue neque. Aenean bibendum
                            in sapien non mattis. Duis purus libero, scelerisque a consequat eget, maximus hendrerit ante.
                        </p>
                    </div>
                </Link>
            </div>


        </main>
    )
}
