import Image, { ImageLoader } from "next/image";
import { AllReservas } from "@/lib/controller";
import quadra1 from "../../img/Quadra1.jpg";
import quadra2 from "../../img/Quadra2.jpg";


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

    const reservasData = AllReservas();

    


  

    return (
        <div className="flex flex-wrap space-x-10 mx-10 my-5">
            {reservasData.map((item: Reserva, index: number) => (
                <div key={index}>
                    <div className="flex flex-col bg-mauaBrown m-auto space-y-6  text-center my-4 p-2 rounded-2xl">
                        
                        <div className="flex flex-col space-y-2 justify-center sm:space-y-4">
                            <h1 className="text-2xl font-bold flex-nowrap">
                                {item.name} <br /> {item.ra}
                            </h1>
                            <h1 className="text-2xl flex-nowrap">
                                <span className="text-2xl font-bold">Horario:</span> Dia{" "}
                                {item.dia} as {item.hora} hrs
                            </h1>
                            <h1 className="text-2xl">
                                <span className="text-2xl font-bold">Local:</span> {item.quadra}
                            </h1>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <h1 className="text-2xl">
                                <span className="font-bold">Status:</span> Ok
                            </h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
