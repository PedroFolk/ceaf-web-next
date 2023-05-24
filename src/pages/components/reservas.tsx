import Image from "next/image";
import campo from "../../img/CopaMaua.jpg"

interface ReservasProps {
    reserva: { dia: string, hora: string, local: string }[];
}

export default function Reservas({ reserva }: ReservasProps) {
    return (
        <div >
            {reserva.map((reserva, index) => (
                <div key={index}>
                    <div className="flex flex-col bg-mauaBrown m-auto space-y-6 w-1/3 text-center my-4 p-2 rounded-2xl">
                        <div className=" m-auto">
                            <Image className="rounded-2xl" src={campo} alt={"Reserva"} />
                        </div>
                        <div className=" flex flex-col space-y-2 justify-center sm:space-y-4">
                            <h1 className="text-2xl flex-nowrap">
                                <span className="text-2xl font-bold">Horario:</span> Dia {reserva.dia} as {reserva.hora}
                            </h1>
                            <h1 className="text-2xl">
                                <span className="text-2xl font-bold">Local:</span> {reserva.local}
                            </h1>

                        </div>
                        <div className=" flex flex-col justify-center space-y-4">
                            <h1 className=" text-2xl ">
                                <span className="font-bold">Status:</span> Ok
                            </h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
