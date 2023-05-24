import Image from "next/image";
import campo from "../../img/CopaMaua.jpg"


export default function CampoMaua() {

    return (
        <div className=" bg-mauaBrown text-center m-5 rounded-2xl ">
            <h1 className="text-4xl font-bold p-6 sm:p-10">Campo</h1>
            <div className="p-4">
                <Image className=" sm:w-2/3 h-auto m-auto rounded-2xl" src={campo} alt={"Foto Copa Mauá"}></Image>
            </div>
            <p className="text-xl sm:text-2xl p-4 sm:p-10 sm:mx-48 text-center">Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto </p>
        </div>
    )

}