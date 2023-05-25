import { suasReservas } from "@/lib/controller";



interface Reserva {
    dia: string;
    email: string;
    esporte: string;
    hora: string;
    name: string;
    pessoa: string;
    quadra: string;
    ra: string;
}

interface ReservasProps {
    reserva: Reserva[];
}

export default function Reservas({ reserva }: ReservasProps) {
    if (!reserva || !Array.isArray(reserva)) {

        return null;
    }

    const reservasData = suasReservas();






    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-10">Suas reservas</h1>
            <div className=" flex overflow-auto shadow-xl rounded-xl  border-2 border-black px-4 py-1 hover:overflow-x-auto space-x-10 mx-2 sm:mx-10 my-5">
                {reservasData.map((item: Reserva, index: number) => (
                    <div key={index} className="my-auto">
                        <div className="border-2 border-black w-96 h-64 justify-center flex flex-col hover:bg-mauaBrown bg-mauaLightBrown m-auto space-y-6  text-center my-4 p-2 rounded-2xl">

                            <div className=" text-2xl  space-y-2 sm:space-y-4">
                                <h1 className=" font-bold flex-nowrap">
                                    {item.name} <br /> {item.ra}
                                </h1>
                                <h1 className="">
                                    <span className="font-bold">Horario:</span> Dia{" "}
                                    {item.dia} as {item.hora} hrs
                                </h1>
                                <h1 className="">
                                    <span className=" font-bold">Local:</span> {item.quadra}
                                </h1>
                            </div>
                            <div className="text-2xl">
                                <h1 className="">
                                    <span className="font-bold">Status:</span> Ok
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
