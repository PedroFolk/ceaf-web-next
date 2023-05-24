import quadra1 from "../../img/Quadra1.jpg"
import quadra2 from "../../img/Quadra2.jpg"
import campo1 from "../../img/Campo.jpg"
import copa from "../../img/CopaMaua.jpg"

import Image from "next/image"
import Link from "next/link"

export default function Sele() {
    return (
        <>
            <div className="font-poppins flex flex-col space-y-5 mt-2 p-2 items-center lg:flex-row lg:space-y-0 lg:align-middle lg:mt-36 lg:p-0 lg:m-10 lg:space-x-10 ">
                <div className="text-center">
                    <h3 className="">
                        Quadra 1
                    </h3>
                    <Link href="pagSelecao2">
                        <Image src={quadra1} alt="Quadra1" className="rounded-2xl w-80 h-80 lg:w-auto lg:h-auto" />
                    </Link>
                </div>
                <div className="text-center">
                    <h3 className="">
                        Quadra 2
                    </h3>
                    <Link href="pagSelecao2">
                        <Image src={quadra1} alt="Quadra2" className="rounded-2xl w-80 h-80 lg:w-auto lg:h-auto" />
                    </Link>
                </div>
                <div className="text-center">
                    <h3 className="">
                        Quadra 3
                    </h3>
                    <Link href="pagSelecao2">
                        <Image src={quadra1} alt="Quadra1" className="rounded-2xl w-80 h-80 lg:w-auto lg:h-auto" />
                    </Link>
                </div>
            </div>
        </>
    )
}