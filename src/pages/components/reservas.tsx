import Image from "next/image";
import campo from "../../img/CopaMaua.jpg"

export default function Reservas() {

    return (
        <div className="flex flex-col sm:flex-row bg-mauaBrown space-y-5 sm:space-y-0 sm:text-left  text-center sm:space-x-56 m-4 p-2 rounded-2xl ">
            <div className="sm:w-1/3">
                <Image className="rounded-2xl" src={campo} alt={"Reserva"} />
            </div>
            <div className=" flex flex-col space-y-2 justify-center sm:space-y-4">
                <h1 className="text-2xl flex-nowrap"><span className="text-2xl font-bold">Horario:</span> Dia 15/03 das 13:00 as 14:00</h1>
                <h1 className="text-2xl"><span className="text-2xl font-bold">Local:</span> Quadra 3</h1>

            </div>
            <div className=" flex flex-col justify-center space-y-4">
                <h1 className=" text-2xl text-transparent ">2</h1>
                <h1 className=" text-2xl "><span className="font-semibold">Status:</span> Ok</h1>
            </div>
        </div>
    )

}