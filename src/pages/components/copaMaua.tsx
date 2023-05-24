import Image from "next/image";
import copa from "../../img/CopaMaua.jpg"


export function CopaMaua() {

    return (
        <div className="  text-center m-5 rounded-2xl ">
            <div className="p-4">
                <Image className=" sm:w-2/3 h-auto m-auto rounded-2xl" src={copa} alt={"Foto Copa Mauá"}></Image>
            </div>
            <div className="bg-mauaBrown rounded-2xl w-3/4 m-auto">
                <h1 className="text-4xl font-bold p-6 sm:p-10">Copa Mauá</h1>
                <p className=" text-xl sm:text-2xl p-4 sm:p-10  text-center">Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto </p>
            </div>
        </div>
    )

}