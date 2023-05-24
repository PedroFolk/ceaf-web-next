import quadra1 from "../../img/Quadra1.jpg"
import quadra2 from "../../img/Quadra2.jpg"
import campo1 from "../../img/Campo.jpg"
import copa from "../../img/CopaMaua.jpg"

import Image from "next/image"
import Link from "next/link"
import Footer from "./footer"

export default function Sele() {
    return (
        <>
            <div className="flex h-screen">
                <div className="text-center m-auto">
                    <h3 className="">
                        Fazer Reserva
                    </h3>
                    <Link href="pagSelecao2">
                        <Image src={quadra1} alt="Quadra1" width={800} height={700} className="rounded-2xl w-80 h-80 lg:w-auto lg:h-auto" />
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}