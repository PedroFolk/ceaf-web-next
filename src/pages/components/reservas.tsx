import Image from "next/image";
import campo from "../../img/CopaMaua.jpg";

interface Reserva {
    dia: string;
    hora: string;
    local: string;
}

interface ReservasProps {
    reserva: Reserva[];
}

export default function Reservas({ reserva }: ReservasProps) {
    if (!reserva || !Array.isArray(reserva)) {
        return null; // Or handle the case when reserva is undefined or not an array
    }

    return (
        <div>
            {reserva.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-col bg-mauaBrown m-auto space-y-6 w-1/3 text-center my-4 p-2 rounded-2xl">
                        <div className="m-auto">
                            <Image className="rounded-2xl" src={campo} alt="Reserva" />
                        </div>
                        <div className="flex flex-col space-y-2 justify-center sm:space-y-4">
                            <h1 className="text-2xl flex-nowrap">
                                <span className="text-2xl font-bold">Horario:</span> Dia{" "}
                                {item.dia} as {item.hora}
                            </h1>
                            <h1 className="text-2xl">
                                <span className="text-2xl font-bold">Local:</span>{" "}
                                {item.local}
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
